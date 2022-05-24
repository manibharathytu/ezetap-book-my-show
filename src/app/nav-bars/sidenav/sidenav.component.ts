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
  }
}
