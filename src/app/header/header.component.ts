import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
n:string="";
  constructor( public ser:DataService) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("token");
  }
}
