import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  user = "HD01"
  loadGraphData(){
    return this.http.get<any>(environment.API+'core/consumption?filter={"userid":"'+this.user+'"}')
  }

  requestCreate(data:object){
    return this.http.post<any>(environment.API+'core/excess',data)
  }
}
