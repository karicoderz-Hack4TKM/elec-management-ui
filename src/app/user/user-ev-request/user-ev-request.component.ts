import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-ev-request',
  templateUrl: './user-ev-request.component.html',
  styleUrls: ['./user-ev-request.component.css']
})
export class UserEvRequestComponent implements OnInit {
  success = false
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  request(form:NgForm){
    function dateFormating(date: string) {
      let d = new Date(date);
      let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
      let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
      let formatedDate = `${da}-${mo}-${ye}`;
      return formatedDate;
    }
    const data = {
      type:"permenant",
      consumption:form.value.consumption.trim(),
      status:true,
      userid:"HD01",
      start_date:dateFormating(form.value.startDate),
    }
    console.log(data)
    this.userService.createEvRequest(data).subscribe(
      res => {
        this.success = true
        form.resetForm()
      },err =>{
        this.success = true
        form.resetForm()
      }
    )
  }

}
