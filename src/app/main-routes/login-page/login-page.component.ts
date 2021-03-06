import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../../apps-data-sharing.service';
// import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  uname: String;
  pwd: String;
  errorMsg: Boolean;


  constructor(private http: HttpClient, private router: Router, private appservice: AppService, private dialogRef: MatDialogRef <LoginPageComponent>) { }

  ngOnInit() {
    // this.appservice.changeCurrentPage("loginPage");

    this.http.post<any>("https://ec2-34-220-8-225.us-west-2.compute.amazonaws.com/isLoggedIn", {}, { withCredentials: true })
      .subscribe(
        data => {
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
    // this.router.navigateByUrl("/");
    this.dialogRef.close();;

  }

  validate() {
    if (!this.uname) { this.errorMsg = true; return false }
    if (!this.pwd) { this.errorMsg = true; return false }
    return true
  }

  login() {
    if (!this.validate()) {
      return
    }
    this.http.post<any>("https://ec2-34-220-8-225.us-west-2.compute.amazonaws.com/login", { uname: this.uname, pwd: this.pwd }, { withCredentials: true })
      .subscribe(
        data => {
          if (data.result == 'suc') {
            this.appservice.changeLoginState("loggedIn");
            this.dialogRef.close();;

            this.router.navigateByUrl("/admin");

          }
          else{
            this.errorMsg=true;
          }

        }

      )
  }
}
