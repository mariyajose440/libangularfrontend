import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readauth',
  templateUrl: './readauth.component.html',
  styleUrls: ['./readauth.component.css']
})
export class ReadauthComponent implements OnInit {
  i:any;
  constructor( public router:Router) { }

  ngOnInit(): void {
    this.i=history.state.data;
  }
  back(){
    this.router.navigate(['auth']);
  }
}
