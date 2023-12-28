import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/common/api-call.service';
import { StorageService } from 'src/app/common/storage.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(
    private storage:StorageService
  ) { }
  courseList:Course[]=[];
  ngOnInit(): void {
    this.storage.wishlist.subscribe(res=>{
      this.courseList=res;
    })
  }
}
