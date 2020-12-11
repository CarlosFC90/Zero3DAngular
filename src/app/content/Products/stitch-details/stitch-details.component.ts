import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../../services/info.service";

@Component({
  selector: 'app-stitch-details',
  templateUrl: './stitch-details.component.html',
  styleUrls: ['./stitch-details.component.css']
})
export class StitchDetailsComponent implements OnInit {

  constructor(public _is: InfoService) { }

  ngOnInit(): void {
  }

}
