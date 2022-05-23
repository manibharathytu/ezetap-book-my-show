import { Component, Input} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
 @Input() lineChartData: ChartDataSets[] = [
    { data: [85000, 72000, 78000, 75000, 77000, 75000], label: 'No of tickets sold' },
    { data: [50000, 46000, 50000, 35000, 40000, 50000], label: 'No of booking orders' },
    { data: [150000, 146000, 150000, 135000, 140000, 150000], label: 'No of active users' },
    { data: [5000, 4600, 5000, 3500, 4000, 5000], label: 'No of new users' },
  ];
 @Input() lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
}