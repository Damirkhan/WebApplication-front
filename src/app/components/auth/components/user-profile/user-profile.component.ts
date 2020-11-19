import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../models/user";
import {SubscriptionService} from "../../../../services/subscriptionService";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.route.params.subscribe(value => {
      this.userService.getUserById(value.id).subscribe(
        perf =>{
          this.user = perf;
          console.log(this.user);
        }
      )
    })
  }

}
