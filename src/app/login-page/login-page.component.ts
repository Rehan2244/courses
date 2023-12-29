import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router:Router,
    private toast:ToastrService
  ) { }
  password:string=''
  email:string=''
  ngOnInit(): void {
  }
  loginNow(){
    if(this.password==='dummy@123' && this.email=='dummy@email.com'){
      this.router.navigate(['courses'])
      this.toast.success('Successfully logged in')
    } else if(this.email!=='dummy@email.com') {
      this.toast.error('Email is wrong or not registered, try dummy@email.com')
    } else if(this.password!=='dummy@123') {
      this.toast.error('Incorrect password')
    }
  }
}
