import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { loginmodel } from "./loginmodel";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( public ser:DataService,public router:Router) { }
  model=new loginmodel("","","","");
  repass="";
  br:any="5px solid red";
  checkpass:Boolean=false;
  re:Boolean=false;
  ngOnInit(): void {
  }
  login(){ 
        console.log(this.model);
        this.ser.login(this.model);
        this.router.navigate(['login']);
      }
  check(){
    console.log("inside check")
    if(this.repass==this.model.password)
    {
      this.br="5px solid rgb(34, 219, 34)";
      this.checkpass=true;
    }
    else
    {
      this.br="5px solid red"
      this.checkpass=false;
    }
  }
}
