import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-substation-generator',
  templateUrl: './substation-generator.component.html',
  styleUrls: ['./substation-generator.component.css'],
})
export class SubstationGeneratorComponent implements OnInit {
  started1: boolean = false;
  started2: boolean = false;
  gen1: any = 0;
  gen2: any = 0;
  gen1StartTime: any;
  gen2StartTime: any;
  gen1estTime: any;
  gen2estTime: any;
  start1 = false;
  start2 = false;
  timer1: any;
  h1: any = 6;
  m1: any = 59;
  s1: any = 60;
  h2: any = 6;
  m2: any = 59;
  s2: any = 60;
  intervalgen1:any;
  intervalgen2:any;
  timer2: any;
  successStart1: boolean = false;
  successStop1: boolean = false;
  successStart2: boolean = false;
  successStop2: boolean = false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.http.get<any>(environment.API + 'core/generator').subscribe((res) => {
      console.log(res);
      //generator 1
      this.gen1 = res.data[0];
      if (res.data[0].startTime != null) {
        this.started1 = true;
        this.gen1Start(res.data[0].startTime);
        // if(this.gen1Sta)
      }
      // generator 2
      this.gen2 = res.data[1];
    });
  }
  gen1Start(startTime?: any) {
    this.start1 = true;
    let currentTime = startTime ? startTime : new Date().getTime();
    console.log(currentTime);
    let time = moment(currentTime).format('hh:mm:ss a');
    let estimate = currentTime + 7 * 60 * 60 * 1000;
    this.gen1StartTime = time;
    this.gen1estTime = moment(estimate).format('hh:mm:ss a');
    if (!startTime) {
      let data = {
        endTime: estimate,
        maxicap: 10000,
        startTime: currentTime,
        totaltime: 7,
        _id: 'GE01',
      };
      this.http
        .put<any>(
          environment.API + 'core/generator?filter={"_id":"GE01"}',
          data
        )
        .subscribe((res) => {
          console.log(res);
          this.successStart1 = true;
          setTimeout(() => {
            this.successStart1 = false;
          }, 3000);
        });
    } else {
      this.s1 = 60 - parseInt(moment().format('ss'));
      this.m1 = 60 - parseInt(moment().format('MM'));
      this.h1 =
        parseInt(moment(estimate).format('HH')) -
        parseInt(moment().format('HH')) -
        1;
    }

    this.intervalgen1 =setInterval(() => {
      if (this.h1 == 0) {
        this.stopGen1();
      }
      if (this.s1 == 0) {
        this.s1 = 60;
        this.m1 -= 1;
      }
      if (this.m1 == 0) {
        this.m1 = 60;
        this.h1 -= 1;
      }
      this.s1 -= 1;
    }, 1000);
  }
  gen2Start(startTime?: any) {
    this.start2 = true;
    let currentTime = startTime ? startTime : new Date().getTime();
    let time = moment(currentTime).format('hh:mm:ss a');
    let estimate = currentTime + 7 * 60 * 60 * 1000;
    this.gen2StartTime = time;
    this.gen2estTime = moment(estimate).format('hh:mm:ss a');
    if (!startTime) {
      let data = {
        endTime: estimate,
        maxicap: 10000,
        startTime: currentTime,
        totaltime: 7,
        _id: 'GE02',
      };
      this.http
        .put<any>(
          environment.API + 'core/generator?filter={"_id":"GE02"}',
          data
        )
        .subscribe((res) => {
          console.log(res);
          this.successStart2 = true;
          setTimeout(() => {
            this.successStart2 = false;
          }, 3000);
        });
    } else {
      this.s2 = 60 - parseInt(moment().format('ss'));
      this.m2 = 60 - parseInt(moment().format('MM'));
      this.h2 =
        parseInt(moment(estimate).format('HH')) -
        parseInt(moment().format('HH')) -
        1;
    }
    this.intervalgen2 =setInterval(() => {
      if (this.h2 == 0) {
        this.stopGen1();
      }
      if (this.s2 == 0) {
        this.s2 = 60;
        this.m2 -= 1;
      }
      if (this.m2 == 0) {
        this.m2 = 60;
        this.h2 -= 0;
      }
      this.s2 -= 1;
    }, 1000);
  }

  stopGen1() {
    this.start1 = false;
    let data = {
      endTime: null,
      maxicap: 10000,
      startTime: null,
      totaltime: 7,
      _id: 'GE01',
    };
    this.http
      .put<any>(environment.API + 'core/generator?filter={"_id":"GE01"}', data)
      .subscribe((res) => {
        console.log(res);
        this.successStop1 = true;
        clearInterval(this.intervalgen1)
        this.h1 = 6;
        this.m1 = 59;
        this.s1 = 60;
        setTimeout(() => {
          this.successStop1 = false;
        }, 3000);
      });
  }
  stopGen2() {
    this.start2 = false;
    let data = {
      endTime: null,
      maxicap: 10000,
      startTime: null,
      totaltime: 7,
      _id: 'GE02',
    };
    this.http
      .put<any>(environment.API + 'core/generator?filter={"_id":"GE02"}', data)
      .subscribe((res) => {
        console.log(res);
        this.successStop2 = true;
        clearInterval(this.intervalgen2)
        this.h2 = 6;
        this.m2 = 59;
        this.s2 = 60;
        setTimeout(() => {
          this.successStop2 = false;
        }, 3000);
      });
  }
}
