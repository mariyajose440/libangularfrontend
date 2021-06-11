import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { bookmodel } from "../book/bookmodel";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  model:bookmodel[]=[];

  constructor( public ser:DataService,public router:Router) { }

  ngOnInit(): void {
    this.ser.bookdata()
    .subscribe(res=>{
      this.model=JSON.parse(JSON.stringify(res));
      console.log(this.model);
    })
  }
  read(_id:any){
    // console.log(_id);
    this.router.navigate(['/book/readmore'],{state:{"data":_id}});
}
edit(i:any){
  console.log(i);
  this.router.navigate(['/book/update'],{state:{"data":i}});
}
delete(_id:any){
  console.log(_id);
  this.ser.deletebook(_id);
  this.router.navigate(['/']);
}
}
