import { Component, OnInit } from '@angular/core';
import { AppService } from '../../appservice.service';



@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent implements OnInit {
  isShowingNav: boolean;


  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.changeCurrentPage('adminPage');
    this.isShowingNav = true;;

    this.appService.sideNav.subscribe(msg => {
      this.isShowingNav = msg;
    });
  }



}
