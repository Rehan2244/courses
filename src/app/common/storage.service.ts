import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  wishlist = new BehaviorSubject<Course[]>([]);
  cart = new BehaviorSubject<Course[]>([]);
  openSideMenu = new BehaviorSubject(false);
  searchValue = new BehaviorSubject('');
  addToCart(course:Course){
    this.cart.next([...this.cart.value,course])
  }
  removeFromCart(course:Course){
    let cartItems=this.cart.value
    let tempArray:Course[]=[];
    cartItems.forEach(el=>{
      if(el.courseName!==course.courseName){
        tempArray.push(el)
      }
    })
    
    this.cart.next(tempArray)

  }
  addToWishlist(course:Course){
    this.wishlist.next([...this.wishlist.value,course])
  }
  removeFromWishlist(course:Course){
    let wishlistItems=this.wishlist.value
    let tempArray:Course[]=[];
    wishlistItems.forEach(el=>{
      if(el.courseName!==course.courseName){
        tempArray.push(el)
      }
    })
    
    this.wishlist.next(tempArray)
  }
}
