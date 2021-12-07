import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  user:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loaduser()
  }
  loaduser(){
    let localuser = localStorage.getItem('user') as string
    this.user = JSON.parse(localuser) 
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }

}
