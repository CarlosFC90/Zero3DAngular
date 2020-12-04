import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info:any = {};
  load:boolean = false;

  constructor( public http: HttpClient) {

    this.http.get("assets/data/info.page.json")
             .subscribe( data => {
               this.load = true;
               this.info = data; 
             });
   }
}
