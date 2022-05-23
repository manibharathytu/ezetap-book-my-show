import { Component, Input, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  @Input() showsData:any;
  data:any;
  displayedColumns:any=['name',
   'timing', 'location', 'price'
  ];

  constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<ShowDetailsComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.data=data;
  }

  close() {
    console.log(this.data);
    this.dialogRef.close({data:'data asdf'});
}
  

  ngOnInit() {
  }

}
