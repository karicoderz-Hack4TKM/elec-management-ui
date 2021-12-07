import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from '../user.service';
import { unix } from 'moment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  totalConsumption = 0;
  peek = 0;
  user:any;
  constructor(private userService: UserService) {}
  chart: any;
  ngOnInit(): void {
    this.chart = document.getElementById('myChart');
    Chart.register(...registerables);
    this.loadChartData();
    this.loaduser()
  }
  loaduser(){
    let localuser = localStorage.getItem('user') as string
    this.user = JSON.parse(localuser) 
  }

  loadChartData() {
    let data: any = [];
    let labels: any = [];
    this.userService.loadGraphData().subscribe((res) => {
      console.log(res);
      res.data.forEach((element: any) => {
        this.totalConsumption += element.consumption;
        if (element.consumption > this.peek) {
          this.peek = element.consumption;
        }
        data.push(element.consumption);
        labels.push(unix(element.time).format('hh:MM a'));
      });
      this.loadChart(data, labels);
    });
  }

  loadChart(data: any, labels: any) {
    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Consumption',
            data: data,
            backgroundColor: 'rgb(115 185 243 / 65%)',
            borderColor: '#007ee7',
            tension: 0.4,
          },
        ],
        labels: labels,
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
