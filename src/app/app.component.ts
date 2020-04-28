import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-rating';
  username:string;
  loginShow:boolean = true;
  siteContentShow: boolean = false;
  listenToLoginUserName(sentUsername){
    this.username = sentUsername;
    this.loginShow = !this.loginShow;
    this.siteContentShow = !this.siteContentShow;
    console.log(this.username)
  }
}
