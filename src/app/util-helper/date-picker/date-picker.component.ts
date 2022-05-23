import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
date:string;
  constructor() { }

  ngOnInit() {
          var today = new Date();
  var dd = String(today.getDate())
  var mm = String(today.getMonth() + 1)//January is 0!
  var yyyy = today.getFullYear();

  this.date = mm + '/' + dd + '/' + yyyy;;

  }

}
