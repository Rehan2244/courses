import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { CoursesComponent } from './container/courses/courses.component';
import { WishlistComponent } from './container/wishlist/wishlist.component';
import { CartComponent, SuccessCheckoutComponent } from './container/cart/cart.component';
import { NavbarComponent } from './container/navbar/navbar.component';
import { CourseCardComponent } from './container/course-card/course-card.component';
import { MatFormFieldModule,MatLabel} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProfileComponent } from './container/profile/profile.component'
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    LandingPageComponent,
    CoursesComponent,
    WishlistComponent,
    CartComponent,
    NavbarComponent,
    CourseCardComponent,
    ProfileComponent,
    ProductDetailComponent,
    SuccessCheckoutComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class LandingPageModule { }
