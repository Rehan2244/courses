import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/common/api-call.service';
import { StorageService } from 'src/app/common/storage.service';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  courseList:Course[]=[]
  constructor(
    private storage:StorageService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.storage.cart.subscribe(res=>{
      this.courseList=res;
    })
  }
  getTotalPrice(){
    let price=0;
    let offerPrice:number=0
    this.courseList.forEach((el:Course)=>{
      price+=parseInt(el.actualPrice.split('₹')[1]);
      let off=parseInt(el.discountPercentage.split('%')[0]);
      let actualPrice=parseInt(el.actualPrice.split('₹')[1]);
      offerPrice += off!=0? parseInt((actualPrice-((actualPrice/100)*off)).toFixed(2)):0
    })
    return {
      total:'₹'+price,
      discountPrice:'₹'+offerPrice,
      savings:'₹'+(price-offerPrice)
    };
  }
  openDialog() {
    this.dialog.open(SuccessCheckoutComponent);
  }
}

@Component({
  selector:'success-checkout',
  templateUrl:'./SuccessCheckout.html',
  styleUrls:['./cart.component.scss']
})
export class SuccessCheckoutComponent{
  constructor(private dialog:MatDialog,private storage:StorageService){

  }
  closeModal(){
    this.dialog.closeAll();
    this.storage.cart.next([])
  }
}
