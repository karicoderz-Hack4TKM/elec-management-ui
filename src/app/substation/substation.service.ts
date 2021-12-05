import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubstationService {

  constructor(private http:HttpClient) { }
  loadGraphData(){
    return this.http.get<any>(environment.API+'core/consumption')
  }
}
