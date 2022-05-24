import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddUpdateMovieComponent } from '../../dialogs/add-update-movie/add-update-movie.component';
import { ShowDetailsComponent } from '../../dialogs/show-details/show-details.component';
export interface PeriodicElement {
  name: string;
  cast: string;
  genre: string;
  lang: string;
  theatres: Theatre[];

}

export interface Theatre {
  name: string;
  timing: string;
  location: string;
  price: number;

}

let MOVIE_DATA: PeriodicElement[] = [
  {
    name: 'ironman sklfjsladk fjlaskdf', cast: 'rdj', genre: 'scifi', lang: 'english',
    theatres: [
      { name: 'pvr', timing: '2:30, 3:30 ', location: 'bangalore', price: 120 },
      { name: 'escape', timing: '16:30', location: 'chennai', price: 120 },
      { name: 'urvasi', timing: '4:00', location: 'bangalore', price: 120 },
    ]
  },
  {
    name: 'kgf 2', cast: 'yash', genre: 'action', lang: 'tamil', theatres: [
      { name: 'jupiter', timing: '2:30, 3:30 ', location: 'thanjavur', price: 120 },
      { name: 'gv studio', timing: '2:30, 3:30 ', location: 'thanjavur', price: 120 },
      { name: 'escape', timing: '1:30', location: 'chennai', price: 120 },
      { name: 'urvasi', timing: '8:00', location: 'bangalore', price: 120 },
    ]
  },
  // { name: 'dhoom', cast: 'hrithik roshan, aishwarya rai', genre: 'adventure', lang: 'hindi' },

  // { name: 'ironman', cast: 'rdj', genre: 'scifi', lang: 'english' },
  // { name: 'kgf 2', cast: 'yash', genre: 'action', lang: 'tamil' },
  // { name: 'dhoom', cast: 'hrithik roshan, aishwarya rai', genre: 'adventure', lang: 'hindi' },
  // { name: 'ironman', cast: 'rdj', genre: 'scifi', lang: 'english' },
  // { name: 'kgf 2', cast: 'yash', genre: 'action', lang: 'tamil' },
  // { name: 'dhoom', cast: 'hrithik roshan, aishwarya rai', genre: 'adventure', lang: 'hindi' },
  // { name: 'ironman', cast: 'rdj', genre: 'scifi', lang: 'english' },
  // { name: 'kgf 2', cast: 'yash', genre: 'action', lang: 'tamil' },
  // { name: 'dhoom', cast: 'hrithik roshan, aishwarya rai', genre: 'adventure', lang: 'hindi' },

];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-movies-list',
  styleUrls: ['movies-list.component.scss'],
  templateUrl: 'movies-list.component.html',
})
export class MoviesListComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  displayedColumns: string[] = ['icon','name', 'cast', 'genre', 'lang', 'noOfLoc', 'button'];;
  dataSource = MOVIE_DATA;

  filterOpen: boolean;
  filterIcon: string;
  currentSortCol: string;
  currentSortAsc: boolean;

  loca: string;
  gpsIcon: string;

  errLocation: boolean = false;

  constructor(private dialog: MatDialog, private http: HttpClient) { }


  onClickUpdateMovie(movie) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%"


    dialogConfig.data=movie;

    let dialogRef = this.dialog.open(AddUpdateMovieComponent, dialogConfig).afterClosed()
      .subscribe(response => {
        console.log('response');
        console.log(response);

        if(response)
        this.updateMovie(response.data);




      });

  }
  onClickAddMovie() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%"

    dialogConfig.data = {
      name: '',
      cast: '',
      genre: '',
      lang: '',
      theatres: [
        {name:'',timing:'',location:'',price:''}
      ]
    }

    let dialogRef = this.dialog.open(AddUpdateMovieComponent, dialogConfig).afterClosed()
      .subscribe(response => {
        console.log('response');
        console.log(response);
        this.addMovie(response.data)




      });

  }
  openDialog(data) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%"

    dialogConfig.data = data

    let dialogRef = this.dialog.open(ShowDetailsComponent, dialogConfig).afterClosed()
      .subscribe(response => {
        console.log('response');
        console.log(response);
      });

  }

  fetchAndFillMoviesData(){
    this.http.post<any>("https://localhost/crud", { 'op': 'find', data: {} }, { withCredentials: true })
    .subscribe(
      data => {
        console.log('resad data')
        console.log(data)
        console.log('read data');
        MOVIE_DATA = data

        MOVIE_DATA = MOVIE_DATA.map((movie) => { movie['button'] = ''; return movie; }) // just for the table button
        MOVIE_DATA = MOVIE_DATA.map((movie) => { movie['icon'] = ''; return movie; }) // just for the table button
        MOVIE_DATA = MOVIE_DATA.map((movie) => { movie['noOfLoc'] = movie['theatres'].length; return movie; }) // just for the table button

        this.dataSource = MOVIE_DATA;

        this.changeLocation('') // gps should work here





      }

    )

  }
  ngOnInit() {
    this.filterOpen = false;
    this.filterIcon = 'filter_alt';

    this.fetchAndFillMoviesData()

    this.currentSortCol = 'name'
    this.currentSortAsc = false
    this.sort('name')


  }

  filter(col, val) {
    console.log(col, val);
    if (val == '') return;;
    this.dataSource = MOVIE_DATA.filter((movie) => movie[col] == val);
  }

  sort(column) {


    this.dataSource = [];
    let num = 1


    if (this.currentSortCol == column && this.currentSortAsc) { num = -num; this.currentSortAsc = false }
    else { this.currentSortAsc = true }
    MOVIE_DATA.sort((a, b) => a[column] > b[column] ? num : -num);

    setTimeout(() => { this.dataSource = MOVIE_DATA }, 100) // #todo: have to find a better way

    this.currentSortCol = column
  }

  viewDetails(name) {
    console.log(name)
    if (this.loca == '') {
      this.errLocation = true;
      // #todo: throw err msg to choose loca - toast notif
      return
    }
    let showsData = (MOVIE_DATA.filter(x => x.name == name))[0].theatres.filter(x => x.location == this.loca)
    console.log(showsData)
    this.openDialog(showsData)
  }

  toggleFilter() {
    this.filterOpen = !this.filterOpen
    if (this.filterOpen) this.filterIcon = 'close'
    else {this.filterIcon = 'filter_alt'; this.removeFilter();}
  }

  removeFilter(){
    this.dataSource = MOVIE_DATA;;
  }

  changeLocation(location) {
    console.log('change loca')
    this.loca = location;

    if (location == '') {
      this.gpsIcon = 'gps_not_fixed'
      this.dataSource = MOVIE_DATA
      return
    }
    this.gpsIcon = 'gps_fixed'
    this.errLocation = false;;


    this.dataSource = MOVIE_DATA.filter((movie) => {
      let theatres = movie.theatres
      for (let i in theatres) {
        if (theatres[i].location == this.loca) return true
      }
      return false
    });


  }

 

  deleteMovie(movieName) {
    this.http.post<any>("https://localhost/crud", { 'op': 'delete', data: { name: movieName } }, { withCredentials: true })
      .subscribe(
        data => {
          console.log(data)
          if (data.result ==
            'suc') {
            MOVIE_DATA = <any>MOVIE_DATA.filter((movie) => movie.name != movieName)
            console.log(MOVIE_DATA);;

            // this.dataSource = [];
            this.dataSource = <any>this.dataSource.filter((movie) => { return movie.name != movieName; })
            console.log(this.dataSource);;
          }


        }

      )
  }
  updateMovie(movieData){

    delete movieData['_id'];;;
    console.log('movieData')
    console.log(movieData)
    console.log('movieData')

    // can send only the changed area, thats better?
    this.http.post<any>("https://localhost/crud", { 'op': 'update', 'data': {name:movieData.name}, newData:movieData }, { withCredentials: true })
      .subscribe(
        data => {
          

        }

      )
  }


  addMovie(movieData) {
    console.log('movieData')
    console.log(movieData)
    this.http.post<any>("https://localhost/crud", { 'op': 'insert', 'data': movieData }, { withCredentials: true })
      .subscribe(
        data => {
          console.log(data)
          if (data.result ==
            'suc') {
            movieData['button'] = ''
            movieData['icon'] = ''
            movieData['noOfLoc'] = movieData['theatres'].length;
            console.log('MOVIE_DATA');;;
            console.log(MOVIE_DATA);;
            MOVIE_DATA.push(movieData)
            console.log(MOVIE_DATA);;

            this.dataSource = [];
            console.log('this.dataSource');;
            console.log(this.dataSource);;

            setTimeout(() => { this.dataSource = MOVIE_DATA }, 100) // have to find a better way

          }


        }

      )
  }


}


