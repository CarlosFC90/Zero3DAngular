import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./content/home/home.component";
import { AboutComponent } from "./content/about/about.component";
import { ContactComponent } from "./content/contact/contact.component";
import { ShopComponent } from "./content/shop/shop.component";
import { LoginRegisterComponent } from "./content/login-register/login-register.component";
import { ProductDetailsComponent } from "./content/Products/product-details/product-details.component";
import { CartComponent } from "./content/cart/cart.component";
import { FavoritosComponent } from "./content/favoritos/favoritos.component";
import { OrganizadorDetailsComponent } from "./content/Products/organizador-details/organizador-details.component";
import { PanterDetailsComponent } from "./content/Products/panter-details/panter-details.component";
import { GroguDetailsComponent } from "./content/Products/grogu-details/grogu-details.component";
import { StitchDetailsComponent } from "./content/Products/stitch-details/stitch-details.component";
import { CuboneDetailsComponent } from "./content/Products/cubone-details/cubone-details.component";
import { SoporteMultiDetailsComponent } from "./content/Products/soporte-multi-details/soporte-multi-details.component";
import { SoporteFijoDetailsComponent } from "./content/Products/soporte-fijo-details/soporte-fijo-details.component";
import { PortaHisoDetailsComponent } from "./content/Products/porta-hiso-details/porta-hiso-details.component";

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:'shop', component:ShopComponent },
  { path:'contact', component:ContactComponent },
  { path:'login', component:LoginRegisterComponent },
  { path:'cart', component:CartComponent },
  { path:'favoritos', component:FavoritosComponent },
  { path:'picap', component:ProductDetailsComponent },
  { path:'organizador', component:OrganizadorDetailsComponent },
  { path:'panter', component:PanterDetailsComponent },
  { path:'grogu', component:GroguDetailsComponent },
  { path:'stitch', component:StitchDetailsComponent },
  { path:'cubone', component:CuboneDetailsComponent },
  { path:'soporteMulti', component:SoporteMultiDetailsComponent },
  { path:'soporteFijo', component:SoporteFijoDetailsComponent },
  { path:'portaHiso', component:PortaHisoDetailsComponent },
  { path:'**', pathMatch: 'full', redirectTo:'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
