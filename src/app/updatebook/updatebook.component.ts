import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor( public router:Router,public ser:DataService) { }
  i:any;
  ngOnInit(): void {
    this.i=history.state.data;
  }
  back(){
    this.router.navigate(['book']);
  }
  update(){
    this.ser.updatebookdata(this.i);
    this.router.navigate(['book']);
  }

}
