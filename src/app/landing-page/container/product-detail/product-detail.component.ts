import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/common/api-call.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  carousel=[
    './assets/images/Sample1.JPG',
    './assets/images/Sample2.jpg',
  ]
  courseDetail:any={};
  videoSelected:boolean=false
  ngOnInit(): void {
    this.loadDetail()
  }

  loadDetail(){
    this.activatedRoute.queryParams.subscribe((res:any)=>{
      this.courseDetail=JSON.parse(res.detail);
    })
  }
  goTo(path:string){
    this.router.navigate([path])
  }
}
