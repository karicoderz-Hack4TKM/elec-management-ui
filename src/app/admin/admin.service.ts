import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getTariff(){
    return this.http.get<any>(environment.API+'core/tariff')
  }

  createTariff(data:Object){
    return this.http.post<any>(environment.API+'core/tariff',data)
  }

  deleteTariff(id:any){
    return this.http.delete<any>(environment.API+'/core/tariff?filter={"type":"'+id+'"}')
  }
}
