import { Component, OnInit } from '@angular/core';
import { ApiCallService, Course } from 'src/app/common/api-call.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

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
