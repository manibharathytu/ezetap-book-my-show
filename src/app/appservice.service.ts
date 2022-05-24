import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    loginState: BehaviorSubject<string>;
    currentPage: BehaviorSubject<string>;
    topBar: BehaviorSubject<boolean>;
    sideNav: BehaviorSubject<boolean>;
    constructor() {

        this.loginState = new BehaviorSubject("loggedOut");
        this.currentPage = new BehaviorSubject("landingPage");
        this.topBar = new BehaviorSubject(true);
        this.sideNav = new BehaviorSubject(true);

    }

    changeLoginState(msg: string) {
        this.loginState.next(msg);
    }

    changeCurrentPage(msg: string) {
        this.currentPage.next(msg)
    }

    changeTopBar(msg: boolean) {
        this.topBar.next(msg);
    }

    changeSideNav(msg: boolean) {
        this.sideNav.next(msg);
    }
}