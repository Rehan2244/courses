import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatBadgeModule } from '@angular/material/badge';
import { CoursesComponent } from './container/courses/courses.component';
import { WishlistComponent } from './container/wishlist/wishlist.component';
import { CartComponent } from './container/cart/cart.component';
import { NavbarComponent } from './container/navbar/navbar.component';
import { CourseCardComponent } from './container/course-card/course-card.component';
import {MatLegacyFormFieldModule as MatFormFieldModule, MatLegacyLabel as MatLabel} from '@angular/material/legacy-form-field'
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import { ProfileComponent } from './container/profile/profile.component'
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
@NgModule({
  declarations: [
    LandingPageComponent,
    CoursesComponent,
    WishlistComponent,
    CartComponent,
    NavbarComponent,
    CourseCardComponent,
    ProfileComponent,
    ProductDetailComponent
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
    MatPaginatorModule
  ]
})
export class LandingPageModule { }
