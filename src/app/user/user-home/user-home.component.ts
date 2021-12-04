import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart,registerables  } from 'chart.js';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private userService:UserService) { }
  chart: any;
  ngOnInit(): void {
    this.chart = document.getElementById('myChart')
    Chart.register(...registerables);
    this.loadChart();
  }

  loadChart(){
    this.userService.loadGraphData().subscribe(
      res => {
        console.log(res)
      }
    )

    new Chart(this.chart, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Current Vallue',
              data: [0, 20, 40, 50],
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              fill: true,
          },
          {
            label: 'Invested Amount',
            data: [0, 20, 40, 60, 80],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
        }],
          labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
      },
  });
  }
   
}
