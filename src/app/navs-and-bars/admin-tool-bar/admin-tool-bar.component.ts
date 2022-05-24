import { Component, OnInit } from '@angular/core';
import { AppService } from '../../apps-data-sharing.service';

@Component({
  selector: 'app-admin-tool-bar',
  templateUrl: './admin-tool-bar.component.html',
  styleUrls: ['./admin-tool-bar.component.scss']
})
export class AdminToolBarComponent implements OnInit {
  topBar: boolean;
  arrowSide: string;
  isShowingNav:boolean=true;

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.topBar = false;
    this.appService.changeTopBar(this.topBar)
    this.arrowSide = this.topBar?'arrow_upward':'arrow_downward'
    this.isShowingNav = true;
 
 
 
  }
  toggleTopBar() {
    this.topBar = !this.topBar;
    this.appService.changeTopBar(this.topBar)
    if (this.arrowSide == 'arrow_upward') { this.arrowSide = 'arrow_downward' }
    else if (this.arrowSide == 'arrow_downward') { this.arrowSide = 'arrow_upward' }
  }
  toggleSideNav(){
    this.isShowingNav=!this.isShowingNav
    this.appService.changeSideNav(this.isShowingNav)
  }

}
