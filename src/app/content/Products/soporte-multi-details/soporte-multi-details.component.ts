import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../../services/info.service";

@Component({
  selector: 'app-soporte-multi-details',
  templateUrl: './soporte-multi-details.component.html',
  styleUrls: ['./soporte-multi-details.component.css']
})
export class SoporteMultiDetailsComponent implements OnInit {

  constructor(public _is: InfoService) { }

  ngOnInit(): void {
  }

}
