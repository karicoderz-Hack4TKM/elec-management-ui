import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.css']
})
export class ProviderLoginComponent implements OnInit {
  public loading = false;
  public error: boolean = false
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    this.loading = true
    let data = {
      email: form.value.email.trim(),
      password: form.value.password.trim()
    }

    this.authService.getProvider(data).subscribe(
      res => {
        if (res.code == 200) {
          console.log(res)
          localStorage.setItem('token', res.token)
          localStorage.setItem('data', res.data)  
          if(res.data.usertype == "admin"){
            this.router.navigate(['/admin'])
          }else{
            this.router.navigate(['/substation'])
          }
          this.loading = false
        } else {
          this.error = true
          this.loading = false
          form.resetForm()
        }
      }
    )





  }

}
