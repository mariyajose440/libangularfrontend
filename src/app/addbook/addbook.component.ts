import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { bookmodel } from "../book/bookmodel";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  model=new bookmodel(" ","","","","","");
  constructor( public ser:DataService,public router:Router) { }

  ngOnInit(): void {
  }
  add(){
    console.log(this.model);
    this.ser.addbookdata(this.model);
    this.router.navigate(['book']);
  }
}
