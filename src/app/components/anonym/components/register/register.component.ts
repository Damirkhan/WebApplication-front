import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../models/user';
import {UserService} from '../../../../services/user.service';
import set = Reflect.set;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errorText: string;
  isTrue: boolean;
  errorColor: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phone: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const user: User = this.form.getRawValue();
    this.userService.register(user).subscribe(perf => {
      this.form.reset();
      this.isTrue = true;
      this.errorColor = 'success';
      this.errorText = 'Успешно добавлено';
      setTimeout(() => {
        this.isTrue = false;
      }, 4000);
    }, error => {
      if (error.error.message === 'login exists') {
        this.isTrue = true;
        this.errorColor = 'danger';
        this.errorText = 'Login Exists';
        setTimeout(() => {
          this.isTrue = false;
        }, 4000);
      }
    });
  }
}
