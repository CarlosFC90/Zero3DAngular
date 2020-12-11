import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../../services/info.service";

@Component({
  selector: 'app-organizador-details',
  templateUrl: './organizador-details.component.html',
  styleUrls: ['./organizador-details.component.css']
})
export class OrganizadorDetailsComponent implements OnInit {

  constructor(public _is: InfoService) { }

  ngOnInit(): void {
  }

}
