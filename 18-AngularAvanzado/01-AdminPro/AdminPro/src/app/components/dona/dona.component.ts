import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { baseColors } from 'ng2-charts';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{
  
  @Input() title: string = 'Sin titulo';

   // Doughnut
  @Input('labels') doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label2'];
  @Input('data') doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450, 100 ], },

  ];


  // doughnutChartColors: baseColors[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: [ '#6857E6','#009FEE','#F02059' ],
  //   },
  // ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };   

}
