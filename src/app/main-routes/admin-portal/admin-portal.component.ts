import { Component, OnInit } from '@angular/core';
import { AppService } from '../../appservice.service';



@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent implements OnInit {
  isShowingNav:boolean;
  topBar: boolean;
  arrowSide: string;

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.changeCurrentPage('adminPage');
    this.isShowingNav = false;

    this.topBar = false;
    console.log('ngOnInit change topbar')
    this.appService.changeTopBar(this.topBar.toString())
    this.arrowSide = this.topBar?'arrow_upward':'arrow_downward'


  }
  toggleTopBar() {
    console.log('ngOnInit change topbar')

    this.topBar = !this.topBar;
    this.appService.changeTopBar(this.topBar.toString())
    if (this.arrowSide == 'arrow_upward') { this.arrowSide = 'arrow_downward' }
    else if (this.arrowSide == 'arrow_downward') { this.arrowSide = 'arrow_upward' }
  }

}
