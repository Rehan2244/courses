import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { ToastrModule } from 'ngx-toastr';
import { Course } from 'src/app/common/api-call.service';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ToastrModule.forRoot()
      ],
      declarations: [ CourseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add to cart',()=>{
    component.addto('cart',{} as Course)
  })
  it('should add to wishlist',()=>{
    component.addto('wishlist',{} as Course)
  })
  it('should get wishlist detail',()=>{
    component.goToCourseDetail({} as Course)
  })
});
