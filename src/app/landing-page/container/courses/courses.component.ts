import { Component, OnInit } from '@angular/core';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';
import { debounceTime } from 'rxjs';
import { ApiCallService, Course } from 'src/app/common/api-call.service';
import { StorageService } from 'src/app/common/storage.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  pageEvent: PageEvent;
  pageIndex:number;
  pageSize:number;
  length:number;
  constructor(
    private api:ApiCallService,
    public storage:StorageService
  ) {
    this.pageEvent= {} as PageEvent;
    this.pageIndex = 0
    this.pageSize = 4
    this.length = 0
   }

  ngOnInit(): void {
    this.getCourses()
    this.searchNow()
  }
  searchNow(){
    this.storage.searchValue.pipe(debounceTime(500)).subscribe(keyword=>{
        this.api.getCourses().subscribe((res:any)=>{
          this.courseList=res;
          this.findKeyWord(keyword)
      })
    })
  }
  findKeyWord(key:string){
    let found=false;
    let results:Course[]=[]
    this.courseList.forEach(el=>{
      let courseName=el.courseName.toUpperCase();
      key=key.toUpperCase();
      if(courseName.includes(key)){
        found=true
      }
      el.tags.forEach(tag => {
        tag.toUpperCase()
        if (tag.includes(key)) {
          found = true
        }
      })
      if(found){
        results.push(el)
        found=false;
      }
    })
    this.courseList=results;
    this.length=this.courseList.length
    this.pageSize = this.courseList.length<4?this.courseList.length:4
    this.courseListTempList=this.getItems(1)
  }
  public getServerData(event:PageEvent){
    this.pageSize=event?.pageSize as any;
    this.courseListTempList = this.getItems(event.pageIndex+1)
  }

  courseList:Course[]=[];
  courseListTempList:Course[]=[]
  async getCourses(){
    this.api.getCourses().subscribe((response:any)=>{
      this.courseList=response
      this.length=this.courseList.length
      this.courseListTempList = this.getItems(1)
      return response;
    },err=>{
      console.log('Error',err)
    })
  }

  getItems(page: number): any[] {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.courseList.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.courseList.length / this.pageSize);
  }

  setItems(items: any[]): void {
    this.courseList = items;
  }

  currentPage=1
  loadItems(): void {
    this.courseList = this.getItems(this.currentPage);
  }

  nextPage(): void {
    if (this.currentPage < this.courseList.length) {
      this.currentPage++;
      this.loadItems();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadItems();
    }
  }

}
