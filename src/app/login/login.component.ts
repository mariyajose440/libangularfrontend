import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public ser:DataService,public router:Router) { }
  user={
    username:"",
    userpassword:""
  }
  msgvalue:String="";
  bc:String="white";
  ngOnInit(): void {
  }
  signup(){
    console.log(this.user);
    this.ser.logindata(this.user)
       .subscribe(res=>{
      localStorage.setItem('token',res.token);
      this.router.navigate(['/']);
    });
    this.msg();
   }
   msg(){
     console.log("msg");
     this.msgvalue="wrong username or password";
     this.bc="rgb(228, 130, 130)";
   }
}
