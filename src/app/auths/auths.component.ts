import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { authmodel } from "../auth/authmodel";

@Component({
  selector: 'app-auths',
  templateUrl: './auths.component.html',
  styleUrls: ['./auths.component.css']
})
export class AuthsComponent implements OnInit {

  constructor( public ser:DataService,public router:Router) { }
  model:authmodel[]=[];

  ngOnInit(): void {
    this.ser.authdata()
    .subscribe(res=>{
      this.model=JSON.parse(JSON.stringify(res));
      console.log(this.model); 
    })
  }
read(_id:any){
  console.log(_id);
  this.router.navigate(['/auth/readmore'],{state:{"data":_id}});
}
edit(i:any){
  console.log(i);
  this.router.navigate(['/auth/update'],{state:{"data":i}});
}
delete(_id:any){
  console.log(_id);
  this.ser.deleteauth(_id);
  this.router.navigate(['/']);
}


}
