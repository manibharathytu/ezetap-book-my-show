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
 
    changeLoginState(msg:string) {
        console.log('changeLoginState')
        console.log(msg)
        this.loginState.next(msg);
        console.log('changeLoginState ends')

    }

    changeCurrentPage(msg:string){
        this.currentPage.next(msg)

    }

    changeTopBar(msg:string){
        console.log('change top bar.')
        this.topBar.next(msg);;

    }
}