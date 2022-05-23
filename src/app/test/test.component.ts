import { Component, Input, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() showsData:any;
  data:any;
  displayedColumns:any=['name',
   'timing', 'location', 'price'
  ];

  constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<TestComponent>,@Inject(MAT_DIALOG_DATA) data) {
    this.data=data;
  }

  close() {
    console.log(this.data);
    this.dialogRef.close({data:'data asdf'});
}
  

  ngOnInit() {
  }

}

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: './dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog {}