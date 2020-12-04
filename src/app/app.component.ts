import { Component } from '@angular/core';
import { InfoService } from "./services/info.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  constructor( public _is: InfoService) {

  }
}
