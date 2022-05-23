import { Component, OnInit } from '@angular/core';
import { AppService } from '../../appservice.service';



@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.changeCurrentPage('adminPage');



  }


}
