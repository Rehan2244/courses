import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { WishlistComponent } from './container/wishlist/wishlist.component';
import { CartComponent } from './container/cart/cart.component';
import { CoursesComponent } from './container/courses/courses.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent,
  children:[
    {path:'',component:CoursesComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'cart',component:CartComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
