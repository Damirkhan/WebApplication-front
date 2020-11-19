import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../models/user';
import {UserService} from '../../../../services/user.service';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const user: User = this.form.getRawValue();
    this.userService.login(user).subscribe(perf => {
      this.form.reset();
      this.authService.setToken(perf);
      this.router.navigate(['/auth', 'home']);
      }, error => {
       console.log(error);
      }
    );
  }
}
