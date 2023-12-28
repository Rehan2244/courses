import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/common/api-call.service';
import { StorageService } from 'src/app/common/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  courseList:Course[]=[]
  constructor(
    private storage:StorageService
  ) { }

  ngOnInit(): void {
    this.storage.cart.subscribe(res=>{
      this.courseList=res;
    })
  }

}
