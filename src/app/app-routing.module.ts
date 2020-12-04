import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./content/home/home.component";
import { AboutComponent } from "./content/about/about.component";
import { ContactComponent } from "./content/contact/contact.component";
import { ShopComponent } from "./content/shop/shop.component";
import { LoginRegisterComponent } from "./content/login-register/login-register.component";
import { ProductDetailsComponent } from "./content/Products/product-details/product-details.component";

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:'shop', component:ShopComponent },
  { path:'contact', component:ContactComponent },
  { path:'login', component:LoginRegisterComponent },
  { path:'product1', component:ProductDetailsComponent },
  { path:'**', pathMatch: 'full', redirectTo:'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
