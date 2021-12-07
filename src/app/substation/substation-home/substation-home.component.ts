import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chart, registerables } from 'chart.js';
import { unix } from 'moment';

@Component({
  selector: 'app-substation-home',
  templateUrl: './substation-home.component.html',
  styleUrls: ['./substation-home.component.css']
})
export class SubstationHomeComponent implements OnInit {
  avgConsumption = 0;
  houseHoldsCount = 0;
  data:any = [];
  dataset:any[] = [];
  label:any[] = [];
  constructor(private http:HttpClient) { 
    
  }
  chart: any;

  ngOnInit(): void {
    this.chart = document.getElementById('myChart1');
    Chart.register(...registerables);
    this.loadData();
  }

  loadData(){
    this.http.get<any>(environment.API+'core/allview').subscribe(
      res => {
        this.data = res
        res.forEach((item:any) => {
          this.dataset.push(item.average)
          this.label.push(item._id)
        })
        this.loadChart(this.dataset,this.label)

      }
    )
  }
  loadChart(data: any, labels: any) {
    new Chart(this.chart, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Average Consumption',
            data: data,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(106, 109, 255)',
              'rgb(255, 162, 107)',
              'rgb(160, 255, 167)',
            ],
            hoverOffset: 4,
          },
        ],
        labels: labels,
      },
       
    });
  }

}
