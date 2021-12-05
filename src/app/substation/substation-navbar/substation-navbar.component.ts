import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-substation-navbar',
  templateUrl: './substation-navbar.component.html',
  styleUrls: ['./substation-navbar.component.css']
})
export class SubstationNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/providers/login'])
  }
}
