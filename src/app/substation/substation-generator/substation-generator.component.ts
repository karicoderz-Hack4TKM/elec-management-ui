import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-substation-generator',
  templateUrl: './substation-generator.component.html',
  styleUrls: ['./substation-generator.component.css']
})
export class SubstationGeneratorComponent implements OnInit {
  gen1 :any= 0
  gen2 :any=0
  gen1StartTime:any;
  gen2StartTime:any;
  gen1estTime:any;
  gen2estTime:any;
  start1 = false
  start2 = false
  timer1:any 
  h1 = 6
  m1 = 59
  s1 = 60
  h2 = 6
  m2 = 59
  s2 = 60
  timer2:any;
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.http.get<any>(environment.API+'core/generator').subscribe(
      res => {
        console.log(res )
        this.gen1 =res.data[0]
        this.gen2 = res.data[1]
      }
    )
  }
  gen1Start(){
    this.start1 = true
    let currentTime = new Date().getTime()
    let time = moment(currentTime).format("hh:mm:ss a")
    let estimate = currentTime + (7*60*60*1000)
    this.gen1StartTime = time;
    this.gen1estTime = moment(estimate).format("hh:mm:ss a");
    console.log(moment(estimate).format("hh:mm:ss a"))
    setInterval(()=>{
      if(this.s1 == 0){
        this.s1 = 60
        this.m1 -= 1
      }
      if(this.m1 == 0){
        this.m1 = 60
        this.h1 -= 1 
      }
      this.s1 -= 1
    },1000)

  }
  gen2Start(){
    this.start2 = true
    let currentTime = new Date().getTime()
    let time = moment(currentTime).format("hh:mm:ss a")
    let estimate = currentTime + (7*60*60*1000)
    this.gen2StartTime = time;
    this.gen2estTime = moment(estimate).format("hh:mm:ss a");
    setInterval(()=>{
      if(this.s2 == 0){
        this.s2 = 60
        this.m2 -= 1
      }
      if(this.m2 == 0){
        this.m2 = 60
        this.h2 -= 0 
      }
      this.s2 -= 1
    },1000)

  }

}
