import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-substation-navbar',
  templateUrl: './substation-navbar.component.html',
  styleUrls: ['./substation-navbar.component.css']
})
export class SubstationNavbarComponent implements OnInit {
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
