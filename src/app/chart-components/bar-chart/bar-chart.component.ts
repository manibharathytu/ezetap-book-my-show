import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() barChartLabels: Label[] = ['Ironman', 'Kgf 2', 'Dhoom', 'Avengers', ]; //[colspan]="2" [rowspan]="1"
  @Input() barChartData: ChartDataSets[] = [
    { data: [45000, 37000, 60000, 70000], label: 'Morning show' },
    { data: [90000, 77000, 64000, 50000], label: 'Evening show' },
    { data: [10000, 17000, 14000, 10000], label: 'Night show' },
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];



}
