import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    loginState: BehaviorSubject<string>;
    currentPage: BehaviorSubject<string>;
    topBar: BehaviorSubject<string>;
    constructor() {

        this.loginState = new BehaviorSubject("loggedOut");
        this.currentPage = new BehaviorSubject("landingPage");
        this.topBar = new BehaviorSubject("true");

    }

    changeLoginState(msg: string) {
        this.loginState.next(msg);
    }

    changeCurrentPage(msg: string) {
        this.currentPage.next(msg)
    }

    changeTopBar(msg: string) {
        this.topBar.next(msg);;
    }
}