import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-substation-users',
  templateUrl: './substation-users.component.html',
  styleUrls: ['./substation-users.component.css']
})
export class SubstationUsersComponent implements OnInit {
  users:any = []
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadUsers()
  }
  loadUsers(){
    return this.http.get<any>(environment.API+'core/users').subscribe(
      res => {
        console.log(res)
        this.users = res.data
      }
    )
  }

}
