import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TyphoonService {

  uri = 'http://localhost:5000/'

  constructor(private http:HttpClient) { }

  getCurrent(){
    return this.http.get(`${this.uri}typhoon/current`)
    // return new Observable((obs)=>{obs.next(this.mockup);obs.complete();})
  }

  getTrackingByCode(code){
    return this.http.get(`${this.uri}typhoon/${code}/tracking`)
  }

  serachByYear(year){
    return this.http.get(`${this.uri}typhoon/search/year/${year}`)
  }

  downlodXlsxReport(code){
    return this.http.get(`${this.uri}typhoon/${code}/file`, {responseType: 'blob'})
  }
}
