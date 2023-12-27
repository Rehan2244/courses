import { Component, OnInit } from '@angular/core';
import { ApiCallService, Course } from 'src/app/common/api-call.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private api:ApiCallService
  ) { }

    ngOnInit(): void {
    }
}
