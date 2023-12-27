import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(
    private http:HttpClient
  ) { }
  
  url='/assets/data.json'
  getCourses(){
    return this.http.get(this.url);
  }
}
export interface Course{
  actualPrice:string,
  author:string,
  courseName:string,
  discountPercentage:string,
  tags:any[]
}
