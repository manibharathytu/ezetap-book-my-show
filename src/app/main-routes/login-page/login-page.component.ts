import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../../appservice.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  uname: String;
  pwd: String;
  errorMsg: Boolean;


  constructor(private http: HttpClient, private router: Router, private appservice: AppService) { }

  ngOnInit() {
    this.appservice.changeCurrentPage("loginPage");

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

          }

        }

      )


  }

  routeToLandingPage() {
    this.router.navigateByUrl("/");

  }

  validate() {
    if (!this.uname) { this.errorMsg = true; return false }
    if (!this.pwd) { this.errorMsg = true; return false }
    return true
  }

  login() {
    console.log(this.uname, this.pwd)
    console.log(this.http)
    if (!this.validate()) {
      return
    }
    this.http.post<any>("https://localhost/login", { uname: this.uname, pwd: this.pwd }, { withCredentials: true })
      .subscribe(
        data => {
          console.log(data)
          if (data.result == 'suc') {
            this.appservice.changeLoginState("loggedIn");
            this.router.navigateByUrl("/admin");

          }
          else{
            console.log('enters')
            this.errorMsg=true;
          }

        }

      )
  }
}
