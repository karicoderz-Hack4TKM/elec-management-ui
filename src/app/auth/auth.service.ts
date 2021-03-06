import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  

  getUser(data:object){
    return this.http.post<any>(environment.API+'userLogin',data)
  }
  getProvider(data:object){
    return this.http.post<any>(environment.API+'core/providers',data)
  }
}
