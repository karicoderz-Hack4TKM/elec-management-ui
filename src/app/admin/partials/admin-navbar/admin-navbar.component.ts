import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  user:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loaduser()
  }
  loaduser(){
    let localuser = localStorage.getItem('data') as string
    this.user = JSON.parse(localuser) 
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/providers/login'])
  }
}
