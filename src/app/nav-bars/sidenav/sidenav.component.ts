import { Component, OnInit, Input } from '@angular/core';

import { AppService } from '../../appservice.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  page: string;
  @Input() isShowingNav: boolean;

  loca: string;
  gpsIcon: string;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.page = 'dashboard';


    this.changeLocation('bangalore') // gps should work here
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
