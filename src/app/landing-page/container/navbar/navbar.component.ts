import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Course } from 'src/app/common/api-call.service';
import { StorageService } from 'src/app/common/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,
    private storageService:StorageService
  ) { }

  ngOnInit(): void {
    this.getWishlistAndCartItems()
  }
  cartItems:Course[]=[]
  wishlistItems:Course[]=[]
  searchKey:any;
  showFiller:boolean=false
  search(){
    this.storageService.searchValue.next(this.searchKey)
    this.router.navigate(['./courses'])
  }
  getWishlistAndCartItems(){
    this.storageService.cart.subscribe(response=>{
      this.cartItems=response
    })
    this.storageService.wishlist.subscribe(response=>{
      this.wishlistItems=response
    })
  }
  goto(name:string){
    this.router.navigate([name])
  }
  checkBadge(type:any){
    let service=(this.storageService as any)[type].value
    return service.length?service.length:''
  }
  openSideMenu(){
    this.storageService.openSideMenu.next(
      !this.storageService.openSideMenu.value
      )
      console.log('Value',this.storageService.openSideMenu.value)
  }
}
