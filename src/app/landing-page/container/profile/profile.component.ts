import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  displayName:string='';
  firstName:string='';
  lastName:string='';
  aboutYourself:string='';
  areaOfIntrest:string='';
  isStudent:boolean=true;
  roleDescription:string='';
  ngOnInit(): void {
  }

}
