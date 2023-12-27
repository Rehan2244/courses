import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { CoursesComponent } from './container/courses/courses.component';
import { WishlistComponent } from './container/wishlist/wishlist.component';
import { CartComponent } from './container/cart/cart.component';
import { NavbarComponent } from './container/navbar/navbar.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    CoursesComponent,
    WishlistComponent,
    CartComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCommonModule
  ]
})
export class LandingPageModule { }
