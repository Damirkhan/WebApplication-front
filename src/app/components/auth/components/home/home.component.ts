import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/user';
import {SubscriptionService} from '../../../../services/subscriptionService';
import {HttpClient} from '@angular/common/http';
/*import any = jasmine.any;*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  users: User[];
  constructor(private userService: UserService,
              private subscriptionService: SubscriptionService,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getUsers();
  }
  getImage(imageName: string) {
    console.log(imageName);
    /*this.httpClient.get('http://localhost:8005/api/images/get/')
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );*/
  }
  getUsers() {
    this.subscriptionService.findAllFollowers().subscribe(perf => {
      this.users = perf;
    });
  }
}
