import { Component, OnInit } from '@angular/core';

import { AppService } from '../appservice.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  page: string;
  isShowingNav: boolean;
  topBar: boolean;
  arrowSide: string;
  loca: string;
  gpsIcon: string;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.page = 'dashboard';
    this.isShowingNav = false;

    this.topBar = false;
    console.log('ngOnInit change topbar')
    this.appService.changeTopBar(this.topBar.toString())
    this.arrowSide = this.topBar?'arrow_upward':'arrow_downward'
    this.changeLocation('bangalore') // gps should work here
  }

  toggleTopBar() {
    console.log('ngOnInit change topbar')

    this.topBar = !this.topBar;
    this.appService.changeTopBar(this.topBar.toString())
    if (this.arrowSide == 'arrow_upward') { this.arrowSide = 'arrow_downward' }
    else if (this.arrowSide == 'arrow_downward') { this.arrowSide = 'arrow_upward' }
  }

  changeLocation(location) {
    this.loca = location;

    if (location == '') {
      this.gpsIcon = 'gps_not_fixed'
      return
    }
    // this.loca = location;
    this.gpsIcon = 'gps_fixed'

  }

}
