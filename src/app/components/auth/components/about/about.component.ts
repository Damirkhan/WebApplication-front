import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/user';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private httpClient: HttpClient, private userService: UserService,
              private auth: AuthService) { }
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  user: User;

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.userService.currentUser().subscribe(perf  => {
        this.user = perf;
        this.getImage();
      });
    }
  }
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8005/api/images/upload', uploadImageData, { observe: 'response' }).subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
    );
  }
  getImage() {
    this.httpClient.get('http://localhost:8005/api/images/get/' + this.user.imageProfileName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
