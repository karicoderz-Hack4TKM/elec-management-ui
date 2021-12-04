import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading =false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  login(form:NgForm){
    this.loading=true
    let data = {
      email:form.value.email.trim(),
      password:form.value.password.trim()
    }
    this.authService.getUser(data).subscribe(
      res => {
        
      }
    )

    
  }

}
