import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-slabs',
  templateUrl: './admin-slabs.component.html',
  styleUrls: ['./admin-slabs.component.css']
})
export class AdminSlabsComponent implements OnInit {
  tariffs:any = []
  success = false;
  message = 'Success'
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.loadTariff()
  }

  loadTariff(){
    this.adminService.getTariff().subscribe(
      res => {
      
        console.log(res)
        this.tariffs = res.data
      }
    )
  }

  addTariff(form:NgForm){
    const data ={
      type: form.value.type,
      threshold: form.value.threshold,
      price: form.value.price
    }
    this.adminService.createTariff(data).subscribe(
      res => {
        this.success = true;
        this.message = 'Tariff added successfully'
      }
    )
  }

}
