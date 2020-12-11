import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../../services/info.service";

@Component({
  selector: 'app-grogu-details',
  templateUrl: './grogu-details.component.html',
  styleUrls: ['./grogu-details.component.css']
})
export class GroguDetailsComponent implements OnInit {

  constructor(public _is: InfoService) { }

  ngOnInit(): void {
  }

}
