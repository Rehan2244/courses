import { Component, OnInit } from '@angular/core';
import { ApiCallService, Course } from 'src/app/common/api-call.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private api:ApiCallService
  ) { }

  ngOnInit(): void {
    this.getCourses()
  }

  courseList:Course[]=[];
  getCourses(){
    this.api.getCourses().subscribe((response:any)=>{
      this.courseList=response
    },err=>{
      console.log('Error',err)
    })
  }
}
