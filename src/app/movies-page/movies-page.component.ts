import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MoviesPageDataSource, MoviesPageItem } from './movies-page-datasource';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<MoviesPageItem>;
  dataSource: MoviesPageDataSource;

  constructor(private http:HttpClient){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'genre', 'lang', 'cast'];

  ngOnInit() {
    this.dataSource = new MoviesPageDataSource();
    console.log(this.dataSource)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  filter(filterColumn, filterValue){

    // <any>this.table.dataSource=null;
    this.dataSource.data = (<any> this.dataSource.data).filter((movie)=> movie[filterColumn] == filterValue);
    this.table.dataSource=this.dataSource
    this.table.renderRows()
setTimeout(()=>{this.table.dataSource=this.dataSource},1000)
  }
}
