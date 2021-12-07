import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Chart,registerables  } from 'chart.js';
import {  unix } from 'moment'
import { UserService } from 'src/app/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-substation-usage-chart',
  templateUrl: './substation-usage-chart.component.html',
  styleUrls: ['./substation-usage-chart.component.css']
})
export class SubstationUsageChartComponent implements OnInit {

  constructor(private userService:UserService,private http:HttpClient,private router:Router) { }
  chart: any;
  ngOnInit(): void {
    this.chart = document.getElementById('myChart')
    Chart.register(...registerables);
    this.loadChartData();
  }

  loadChartData(){
    let url = this.router.url;
    let urlList = url.split('/')
    let user = urlList[3]
    let data:any = []
    let labels:any = []
    return this.http.get<any>(environment.API+'core/consumption?filter={"userid":"'+user+'"}').subscribe(
      (res:any) => {
        console.log(res)
        res.data.forEach((element:any) => {
            data.push(element.consumption)
            labels.push(unix(element.time).format('hh:MM a'))
        });
        this.loadChart(data,labels)
      }
    )

    
  }
   

  loadChart(data:any,labels:any){
    
    new Chart(this.chart, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Consumption',
              data: data,
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
 
          }],
          labels: labels
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Time',
              color: '#007ee7',
              font: {
                family: 'Comic Sans MS',
                size: 20,
                weight: 'bold',
                lineHeight: 1.2,
              },
              // padding: { top: 20, left: 0, right: 0, bottom: 0 },
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Consumption(kWh)',
              color: '#007ee7',
              font: {
                family: 'Times',
                size: 20,
                style: 'normal',
                lineHeight: 1.2,
              },
            },
          },
        },
      },
      
  });
  }
}

