import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../services/info.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public _is: InfoService) { }

  ngOnInit(): void {
  }

}
