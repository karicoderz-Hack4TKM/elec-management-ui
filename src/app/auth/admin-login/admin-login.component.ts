import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public loading =false;
  constructor() { }

  ngOnInit(): void {
  }
  login(form:NgForm){
    this.loading=true
    let data = {
      email:form.value.email.trim(),
      password:form.value.password.trim()
    } 
    
  }

}
