import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

//Services
import { InfoService } from "./services/info.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ShopComponent } from './content/shop/shop.component';
import { ProductDetailsComponent } from './content/Products/product-details/product-details.component';
import { LoginRegisterComponent } from './content/login-register/login-register.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './content/cart/cart.component';
import { OwlModule } from "ngx-owl-carousel";
import { FavoritosComponent } from './content/favoritos/favoritos.component';
import { OrganizadorDetailsComponent } from './content/Products/organizador-details/organizador-details.component';
import { PanterDetailsComponent } from './content/Products/panter-details/panter-details.component';
import { GroguDetailsComponent } from './content/Products/grogu-details/grogu-details.component';
import { StitchDetailsComponent } from './content/Products/stitch-details/stitch-details.component';
import { CuboneDetailsComponent } from './content/Products/cubone-details/cubone-details.component';
import { SoporteMultiDetailsComponent } from './content/Products/soporte-multi-details/soporte-multi-details.component';
import { SoporteFijoDetailsComponent } from './content/Products/soporte-fijo-details/soporte-fijo-details.component';
import { PortaHisoDetailsComponent } from './content/Products/porta-hiso-details/porta-hiso-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    ProductDetailsComponent,
    LoginRegisterComponent,
    CartComponent,
    FavoritosComponent,
    OrganizadorDetailsComponent,
    PanterDetailsComponent,
    GroguDetailsComponent,
    StitchDetailsComponent,
    CuboneDetailsComponent,
    SoporteMultiDetailsComponent,
    SoporteFijoDetailsComponent,
    PortaHisoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    NgbModule,
    OwlModule
  ],
  providers: [
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
