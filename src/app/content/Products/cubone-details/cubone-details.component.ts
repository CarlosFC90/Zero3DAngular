import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../../services/info.service";

@Component({
  selector: 'app-cubone-details',
  templateUrl: './cubone-details.component.html',
  styleUrls: ['./cubone-details.component.css']
})
export class CuboneDetailsComponent implements OnInit {

  constructor(public _is: InfoService) { }

  ngOnInit(): void {
  }

}
