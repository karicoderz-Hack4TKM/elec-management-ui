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
  today:any
  user:any;
  slab:any ;
  price:any = 1
  constructor(private http:HttpClient) {
    this.today = new Date().toISOString();
    let localuser = localStorage.getItem('user') as string
    this.user = JSON.parse(localuser)  
    
   }

  ngOnInit(): void {
    this.loadSlab();
    this.loadUserBill()
  }

  loadSlab(){
    this.http.get<any>(environment.API+'/core/tariff?filter={"type":"'+this.user.usertype.toLowerCase()+'"}').subscribe(
      res => {
        console.log(res.data)
        this.slab = res.data[0]
        this.price = res.data[0].length > 0 ? res.data[0].price : 1.5
      }
    )
  }


  loadUserBill(){
    this.loading = true
    this.http.get<any>(environment.API+'core/bill?filter={"userid":"'+this.user._id+'"}').subscribe(
      res => {
        this.loading = false
        this.tariff = this.slab.price * res.data
        this.unit = res.data
      }
    )
  }

}
