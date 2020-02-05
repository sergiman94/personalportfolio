import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/Email';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServerService {

  API = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`${this.API}/test`)
  }

  setData(data: Email){
    return this.http.post(`${this.API}/test`,data );
  }

}
