import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-request-form',
  templateUrl: './user-request-form.component.html',
  styleUrls: ['./user-request-form.component.css']
})
export class UserRequestFormComponent implements OnInit {
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
      type:form.value.type,
      reason:form.value.reason.trim(),
      status:true,
      userid:"HD01",
      start_date:dateFormating(form.value.startDate),
      end_date:dateFormating(form.value.endDate),
    }
    console.log(data)
    this.userService.requestCreate(data).subscribe(
      res => {
        this.success = true
        form.resetForm()
      },
    )
  }
}
