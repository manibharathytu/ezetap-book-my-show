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
import { LandingPageComponent } from './main-routes/landing-page/landing-page.component';

import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './main-routes/login-page/login-page.component';
import { TopBarComponent } from './navs-and-bars/top-bar/top-bar.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';

// remove unused
import { MatCardModule } from '@angular/material';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AdminPortalComponent } from './main-routes/admin-portal/admin-portal.component';
import { SidenavComponent } from './navs-and-bars/sidenav/sidenav.component';
import { DashboardPageComponent } from './main-pages/dashboard-page/dashboard-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MoviesListComponent } from './main-pages/movies-list/movies-list.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './chart-components/line-chart/line-chart.component';
import { BarChartComponent } from './chart-components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './chart-components/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './chart-components/pie-chart/pie-chart.component';

import { MatAutocompleteModule } from '@angular/material';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ShowDetailsComponent } from './dialogs/show-details/show-details.component';
import { DatePickerComponent } from './util-helper/date-picker/date-picker.component';



import { MatDatepickerModule } from '@angular/material';
import { AddUpdateMovieComponent } from './dialogs/add-update-movie/add-update-movie.component';
import { AdminToolBarComponent } from './navs-and-bars/admin-tool-bar/admin-tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    TopBarComponent,
    AdminPortalComponent,
    SidenavComponent,
    DashboardPageComponent,
    MoviesListComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    ShowDetailsComponent,
    AddUpdateMovieComponent,
    DatePickerComponent,
    AdminToolBarComponent
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
        ]
      },
      { path: '', component: LandingPageComponent },
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ShowDetailsComponent, AddUpdateMovieComponent]
})
export class AppModule { }

// #todo :remove unused modules n imports