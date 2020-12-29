import { Component } from '@angular/core';
import { InfoService } from "../../services/info.service";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public _is: InfoService, public modal: NgbModal) { }

  openLg(ModalPicap){
    this.modal.open(ModalPicap, { size: 'lg'});
  }


  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
}
