import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  

  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [ 10, 15, 40 ], label: 'Series A' },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
  responsive: false
};

}
