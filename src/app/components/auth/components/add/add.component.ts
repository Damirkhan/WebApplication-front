import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../../../models/post';
import {AuthService} from '../../../../services/auth.service';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';
import {PostService} from '../../../../services/post.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup;
  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const post: Post = this.form.getRawValue();
    if (this.authService.isAuthenticated()) {
      this.userService.currentUser().subscribe(
        perf => {
          post.author = perf;
          this.postService.create(post).subscribe(perf => {
              console.log(perf);
            }
          );
        }, error => {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      );
    }
  }
}
