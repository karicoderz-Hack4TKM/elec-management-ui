import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.component.html',
  styleUrls: ['./admin-notification.component.css']
})
export class AdminNotificationComponent implements OnInit {
  success:boolean = false
  loading:boolean = false
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  sendnoti(form:NgForm){
    this.loading = true
    let data = {
      subject:form.value.subject.trim(),
      message:form.value.message.trim()
    }
    this.http.post<any>(environment.API+'core/send',data).subscribe(
      res =>{
        form.resetForm()
        this.loading = false
        this.success = true;
        setTimeout(() => {
          this.success = false
        }, 3000);
      }
    )
  }


}
