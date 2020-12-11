import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../../services/info.service";

@Component({
  selector: 'app-porta-hiso-details',
  templateUrl: './porta-hiso-details.component.html',
  styleUrls: ['./porta-hiso-details.component.css']
})
export class PortaHisoDetailsComponent implements OnInit {

  constructor(public _is: InfoService) { }

  ngOnInit(): void {
  }

}
