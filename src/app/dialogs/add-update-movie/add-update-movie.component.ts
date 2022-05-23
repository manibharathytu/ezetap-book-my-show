import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-add-update-movie',
  templateUrl: './add-update-movie.component.html',
  styleUrls: ['./add-update-movie.component.scss']
})
export class AddUpdateMovieComponent implements OnInit {

  data: any;

  errMsg: boolean;

  addOrUpdate: string;


  constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<AddUpdateMovieComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
    if (data.name == '') { this.addOrUpdate = 'Add Movie' }
    else { this.addOrUpdate = 'Update Movie' }
  }



  addMovie() {

    if (
      // this.name === undefined || this.cast === undefined || this.genre === undefined || this.language === undefined ||
      this.data.name.length == 0 || this.data.cast.length == 0 || this.data.genre.length == 0 || this.data.lang.length == 0) {
      this.errMsg = true;
      return
    }

    this.dialogRef.close({ data: this.data });;

  }

  delete(theatre) {
    this.data.theatres = this.data.theatres.filter(x => x.name != theatre.name);;
  }

  ngOnInit() {
  }

}
