import { Component, OnInit } from '@angular/core';
import { InfoService } from "../../services/info.service";
import { NgbModal } from "../../../../node_modules/@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public _is: InfoService, private modal: NgbModal) { }

  ngOnInit(): void {
  }

}
