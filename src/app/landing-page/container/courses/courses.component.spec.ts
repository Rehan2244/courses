import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { HttpClientModule } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { Course } from 'src/app/common/api-call.service';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      declarations: [ CoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.courseList=[{}as Course,{}as Course]
    component.currentPage=0
    expect(component).toBeTruthy();
  });
  it('should be able to search ',()=>{
    component.courseList=[{courseName:'java',tags:['java']}as Course,{}as Course]
    component.findKeyWord('java')
  })
  it('should be able to get pagination data ',()=>{
    component.getServerData({} as PageEvent)
    component.courseList=[{}as Course,{}as Course]
    component.getTotalPages()
    component.loadItems()
    component.currentPage=0
    component.nextPage()
    component.prevPage()
    component.setItems([{}])
  })
});
