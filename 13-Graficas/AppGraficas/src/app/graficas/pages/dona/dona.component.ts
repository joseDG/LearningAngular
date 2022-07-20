import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
//import { Color, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
})
export class DonaComponent  {

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 350, 450, 100 ], 
        backgroundColor: ['#6405F0','#0724E3', '#05A0F0']
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // public colors: Color[] = [
  //   {
  //     backgroundColor: [
  //       '#0075ED',
  //       '#00BAF7',
  //       '#00E0DB',
  //       '#00F7AD',
  //       '#00ED63',
  //     ]
  //   }
  // ]

}
