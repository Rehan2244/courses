import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './common/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer:any;
  constructor(
    private router:Router,
    private storageService:StorageService
  ){}
  showFiller:boolean=false
  ngOnInit(){
    this.storageService.openSideMenu.subscribe(res=>{
        this.showFiller=res
        this.drawer.toggle()
    })
    console.log('drawer',this.drawer)
  }
  goto(path:string){
    this.drawer.toggle()
    this.router.navigate([path])
  }
  title = 'courses';
}
