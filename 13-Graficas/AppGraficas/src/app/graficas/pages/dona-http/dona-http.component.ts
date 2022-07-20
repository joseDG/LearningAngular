import { Component, OnInit } from '@angular/core';
import { ChartType, ChartData } from 'chart.js';
//import { Color } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
})
export class DonaHttpComponent implements OnInit {


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

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales().subscribe(
      resp=>{
        console.log(resp);
        const labels=Object.keys(resp)
        const datos=Object.values(resp)
        this.doughnutChartData={
          labels:Object.keys(resp),
          datasets:[{data:Object.values(resp)}]
        }
      }
    )

    //Llamado con RJX
    // this.graficasService.getUsuariosRedesSocialesDonaData()
    // .subscribe( ({ labels, values }) => {

    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push( values );

    // })
  }
 
  public doughnutChartLabels: string[] =  []/* [ 'Dascargas', 'Ventas en tienda', 'Venta online' ] */;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: []
      },
    ]
  };
 
  public doughnutChartType: ChartType = 'doughnut';
 

}
