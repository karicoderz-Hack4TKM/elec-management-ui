import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading = false;
  public error: boolean = false
  admin = {
    email:"elec@gmail.com",
    password:'password'
  }
  substation = {
    email:"SUB001@gmail.com",
    password:'password'
  }
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    this.loading = true
    let data = {
      email: form.value.email.trim(),
      password: form.value.password.trim()
    }
    if(data.email == this.admin.email && data.password == this.admin.password){
      this.router.navigate(['/admin']);
    }else if (data.email == this.substation.email && data.password == this.substation.password){
      this.router.navigate(['/substation']);
    }else{
      this.authService.getUser(data).subscribe(
        res => {
          console.log(res)
          if (res.code == 200) {
            localStorage.setItem('token',res.data.token)
              this.router.navigate(['/user']);
              this.loading = false
          }else{
            this.error = true
            this.loading = false
            form.resetForm()
          }
        }
      )
    }

    


  }

}
