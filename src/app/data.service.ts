import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( public http:HttpClient,public router:Router) { }
  bookdata(){
    return this.http.get("http://localhost:4300/book/book");
  }
  authdata(){
    return this.http.get("http://localhost:4300/auth/auth");
  }
  addbookdata(item:any){
    console.log(item);
    return this.http.post("http://localhost:4300/book/addbookdata",{"data":item})
    .subscribe(()=>console.log("success"));
  }
  addauthdata(item:any){
    console.log(item);
    return this.http.post("http://localhost:4300/auth/addauthdata",{"data":item})
    .subscribe(()=>console.log("success"));
  }
  updatebookdata(item:any){
    console.log(item);
    return this.http.post("http://localhost:4300/book/updatebookdata",{"data":item})
    .subscribe(()=>console.log("success"));
  }
  updateauthdata(item:any){
    console.log(item);
    return this.http.post("http://localhost:4300/auth/updateauthdata",{"data":item})
    .subscribe(()=>console.log("success"));
  }
  deletebook(item:any){
    return this.http.post("http://localhost:4300/book/deletebookdata",{"data":item})
    .subscribe(()=>console.log("success"));
  }
  deleteauth(item:any){
    return this.http.post("http://localhost:4300/auth/deleteauthdata",{"data":item})
    .subscribe(()=>console.log("success"));
  }
  login(item:any){
    console.log("inside service")
    return this.http.post("http://localhost:4300/login/login",{"data":item}) 
    .subscribe(()=>console.log("success"));
  }
  logindata(item:any){
    console.log("inside service");
    return this.http.post<any>("http://localhost:4300/login/check",{"data":item});
  }
  loggedIn(){
    return !! localStorage.getItem('token');
  }
  getToken(){
    return  (localStorage.getItem('token'));
  }
}
  
