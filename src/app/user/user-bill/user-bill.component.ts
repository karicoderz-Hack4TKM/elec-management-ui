import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-bill',
  templateUrl: './user-bill.component.html',
  styleUrls: ['./user-bill.component.css']
})
export class UserBillComponent implements OnInit {
  loading = false
  tariff:any = 0
  unit:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  loadUserBill(form:NgForm){
    this.loading = true
    this.http.get<any>(environment.API+'core/bill?filter={"userid":"'+form.value.userid.trim()+'"}').subscribe(
      res => {
        this.loading = false
        this.tariff = 1.2 * res.data
        this.unit = res.data
      }
    )
  }
  loadBill(){
    this.http.get<any>(environment.API+'core/bill')
  }

}
