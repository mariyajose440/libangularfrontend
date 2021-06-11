import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.css']
})
export class ReadbookComponent implements OnInit {
  i:any;
  constructor( public router:Router) { }

  ngOnInit(): void {
    this.i=history.state.data;
  }
  back(){
      this.router.navigate(['book']);
  }
}
