import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';

// remove unused
import { MatCardModule } from '@angular/material';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import { MatAutocompleteModule } from '@angular/material';
import { TestComponent } from './test/test.component';

// import { ToastrModule } from 'ngx-toastr';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

// import{DialogContentExampleDialog} from './test/test.component'

// import { TestModule } from './test/test.module';

import { MatDatepickerModule } from '@angular/material';
import { AddUpdateMovieComponent } from './add-update-movie/add-update-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    TopBarComponent,
    AdminPortalComponent,
    SidenavComponent,
    // DashboardComponent,
    DashboardPageComponent,
    MoviesPageComponent,
    MoviesListComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    TestComponent,
    ShowDetailsComponent,
    DatePickerComponent,
    AddUpdateMovieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    RouterModule.forRoot([
      { path: 'login', component: LoginPageComponent },
      {
        path: 'admin', component: AdminPortalComponent,
        children: [
        //  { path: 'dashboard', component: DashboardComponent}
        ]
      },
      { path: '', component: LandingPageComponent },
      { path: 'test', component: TestComponent },
    ]),
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ChartsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDialogModule
    // ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TestComponent, ShowDetailsComponent, AddUpdateMovieComponent]
})
export class AppModule { }
