import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  pieChartLabels: any;
  pieChartData: any;
  doughnutChartLabels: any;
  doughnutChartData: any;
  lineChartData: any;
  lineChartLabels: any;
  barChartLabels: any;
  barChartData: any;

  ngOnInit() {

    this.setDonutChartData();
    this.setLineChartData();
    this.setBarChartData();
    this.setPieChartData();


    // setTimeout(this.setDonutChartData, 10000) // this timeout set chart data is also not working for the same reson as api data update 


    //#todo : the bottom code is not working. updating the chart data later is not updating in ui 
    this.http.post<any>("https://ec2-34-220-8-225.us-west-2.compute.amazonaws.com/getStats", { 'op': 'find', data: {} }, { withCredentials: true })
      .subscribe(
        data => {
          this.pieChartLabels = data[0].popGenre.Labels
          this.pieChartData = data[0].popGenre.tickets

          console.log(this.pieChartLabels, this.pieChartData)


          // this.pieChartLabels = ['SciFi', ['Drama'], 'Comedy']
          // this.pieChartData = [30, 50, 20];
        }
      )

  }


  setPieChartData() {
    this.pieChartLabels = ['SciFi', ['Drama'], 'Comedy']
    this.pieChartData = [30, 50, 20]
  }



  setLineChartData() {
    this.lineChartData = [
      { data: [85000, 72000, 78000, 75000, 77000, 75000], label: 'No of tickets sold' },
      { data: [50000, 46000, 50000, 35000, 40000, 50000], label: 'No of booking orders' },
      { data: [150000, 146000, 150000, 135000, 140000, 150000], label: 'No of active users' },
      { data: [5000, 4600, 5000, 3500, 4000, 5000], label: 'No of new users' },
    ];
    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

  }



  setBarChartData() {
    this.barChartLabels = ['Ironman', 'Kgf 2', 'Dhoom', 'Avengers',]; //[colspan]="2" [rowspan]="1"
    this.barChartData = [
      { data: [45000, 37000, 60000, 70000], label: 'Morning show' },
      { data: [90000, 77000, 64000, 50000], label: 'Evening show' },
      { data: [10000, 17000, 14000, 10000], label: 'Night show' },
    ];

  }
  setDonutChartData() {
    this.doughnutChartLabels = ['Morning', 'Evening', 'Night', 'Afternoon']
    this.doughnutChartData = [
      [30000, 50000, 30000, 5000],
      [25000, 55000, 20000, 10000],
      [20000, 60000, 10000, 20000]

    ];
  }


  // /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  constructor(private breakpointObserver: BreakpointObserver, private http: HttpClient) { }
}
