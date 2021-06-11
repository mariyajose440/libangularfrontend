import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { authmodel } from "../auth/authmodel";

@Component({
  selector: 'app-addauth',
  templateUrl: './addauth.component.html',
  styleUrls: ['./addauth.component.css']
})
export class AddauthComponent implements OnInit {
  model=new authmodel("","","","","");
  constructor( public ser:DataService,public router:Router) { }

  ngOnInit(): void {
  }
  addauth(){
    console.log(this.model);
    this.ser.addauthdata(this.model);
    this.router.navigate(['auth']);
  }
}
