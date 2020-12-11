import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../../services/info.service";

@Component({
  selector: 'app-panter-details',
  templateUrl: './panter-details.component.html',
  styleUrls: ['./panter-details.component.css']
})
export class PanterDetailsComponent implements OnInit {

  constructor(public _is: InfoService) { }

  ngOnInit(): void {
  }

}
