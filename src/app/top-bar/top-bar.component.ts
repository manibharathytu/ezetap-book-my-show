import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../appservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isLoggedIn: string;
  buttonText: string;
  currentPage: string;
  showTopBar:string='true';

  constructor(private router: Router, private appservice: AppService, private http: HttpClient) { }

  ngOnInit() {
    this.buttonText = 'Login'

    this.http.post<any>("https://localhost/isLoggedIn", {}, { withCredentials: true })
      .subscribe(
        data => {
          console.log(data)
          if (data.result == 'suc') {
            this.appservice.changeLoginState("loggedIn");
            this.router.navigateByUrl("/admin");


          }
          else {
            this.appservice.changeLoginState("loggedOut");
            this.router.navigateByUrl("/"); // cant navigate to login page directly cos of this 
            this.showTopBar='true';

          }

        }
        // // console.log

      )

    this.appservice.loginState.subscribe(msg => {
      console.log(msg)
      console.log('login state')
      this.isLoggedIn = msg;
      if (msg == 'loggedIn') {
        this.buttonText = 'Logout'
        console.log('logout.')
      }
      // else if(msg=='loggedOut'){
      //   this
      // }

    });

    this.appservice.currentPage.subscribe(msg => {
      console.log(msg)
      console.log('cur page')
      this.currentPage = msg;
    

    });

    this.appservice.topBar.subscribe(msg => {
      console.log('top bar change...')
      console.log(msg);
      this.showTopBar = msg;
    

    });

  }
  onClickLogin() {
    console.log('asdf')
    console.log(this.isLoggedIn)
    if (this.isLoggedIn == 'loggedOut') {
      this.router.navigateByUrl("/login");
      this.isLoggedIn = "loginPage"
    }
    else {
      this.http.post<any>("https://localhost/logout", {}, { withCredentials: true })
        .subscribe(
          data => {
            console.log(data)
            if (data.result == 'suc') {
              this.router.navigateByUrl("/");
              this.isLoggedIn = "loggedOut"
              this.buttonText = 'Login'


            }
            else {
              // this.appservice.changeLoginState("loggedOut");

            }

          }
          // // console.log

        )

    }
    // this.appservice.changeLoginState("loginPage");
  }
}
