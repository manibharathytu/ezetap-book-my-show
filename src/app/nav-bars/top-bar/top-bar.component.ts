import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../appservice.service';
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
  showTopBar: string = 'true';

  constructor(private router: Router, private appservice: AppService, private http: HttpClient) { }

  isLoggedInCheck() {
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
            if (this.router.url !== '/login')
              this.router.navigateByUrl("/"); // #bug: cant navigate to login page url directly because of this 
            this.showTopBar = 'true';
          }
        }
      )
  }

  subscribeToDataSharing() {
    this.appservice.loginState.subscribe(msg => {
      this.isLoggedIn = msg;
      if (msg == 'loggedIn') {
        this.buttonText = 'Logout'
      }
    });

    this.appservice.currentPage.subscribe(msg => {
      this.currentPage = msg;
    });

    this.appservice.topBar.subscribe(msg => {
      this.showTopBar = msg;
    });
  }

  ngOnInit() {
    this.buttonText = 'Login'

    this.isLoggedInCheck()
    this.subscribeToDataSharing()

  }
  
  onClickLogin() {
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
              // #todo
              // logout fail toast msg
            }
          }
        )
    }
  }
}
