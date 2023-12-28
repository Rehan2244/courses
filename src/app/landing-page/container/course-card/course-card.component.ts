import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/common/api-call.service';
import { StorageService } from 'src/app/common/storage.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  constructor(
    public storage:StorageService,
    public route:Router,
    private toastr:ToastrService
  ) { 
    this.course={
      courseName:'',
      author:'',
      actualPrice:'',
      discountPercentage:'',
      tags:[]
    }
  }

  @Input() course:Course;
  ngOnInit(): void {
    console.log('Course is',this.route.url)
  }

  addto(type:string,course:Course){
    if(type==='cart'){
      this.storage.cart.next([...this.storage.cart.value,course])
      this.showSuccess()
    }
    if(type==='wishlist'){
      this.storage.wishlist.next([...this.storage.wishlist.value,course])
    }
  }

  showSuccess() {
    this.toastr.success('Course successfully added in the cart.', 'Toastr fun!');
  }
  
  checkForCartItems(course:Course){
    let added=false
    this.storage.cart.value.forEach(el=>{
      if(el.courseName===course.courseName){
        added=true
      }
    })
    return added;
  }
  checkForWishlistItems(course:Course){
    let added=false
    this.storage.wishlist.value.forEach(el=>{
      if(el.courseName===course.courseName){
        added=true
      }
    })
    return added;
  }
  calculatePercentage(offer:string,actualPrice:any){
    let off=parseInt(offer.split('%')[0]);
    actualPrice=parseInt(actualPrice.split('₹')[1]);
    return off!=0? '₹'+(actualPrice-((actualPrice/100)*off)).toFixed(2):''
  }

}
