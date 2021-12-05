import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-substation-home',
  templateUrl: './substation-home.component.html',
  styleUrls: ['./substation-home.component.css']
})
export class SubstationHomeComponent implements OnInit {
  avgConsumption = 0;
  houseHoldsCount = 0;
  data:any = []
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.http.get<any>(environment.API+'core/allview').subscribe(
      res => {
        this.data = res
      }
    )
  }

}
