import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../../services/info.service";

@Component({
  selector: 'app-soporte-fijo-details',
  templateUrl: './soporte-fijo-details.component.html',
  styleUrls: ['./soporte-fijo-details.component.css']
})
export class SoporteFijoDetailsComponent implements OnInit {

  constructor(public _is: InfoService) { }

  ngOnInit(): void {
  }

}
