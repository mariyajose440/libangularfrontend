import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updateauth',
  templateUrl: './updateauth.component.html',
  styleUrls: ['./updateauth.component.css']
})
export class UpdateauthComponent implements OnInit {
  i:any;
  constructor( public ser:DataService,public router:Router) { }

  ngOnInit(): void {
    this.i=history.state.data;
  }
  back(){
    this.router.navigate(['auth']);
  }
  update(){
    this.ser.updateauthdata(this.i);
    this.router.navigate(['auth']);
  }
}
