import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent {

  @Input() doughnutChartLabels: Label[] = ['Morning', 'Evening', 'Night', 'Afternoon'];
  @Input() doughnutChartData: MultiDataSet = [
    [25000, 55000, 20000, 10000]
  ];
  doughnutChartType: ChartType = 'doughnut';

}
