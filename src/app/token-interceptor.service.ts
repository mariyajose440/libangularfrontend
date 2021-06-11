import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { DataService } from './data.service';
import { Injector } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private inj:Injector) { }
  intercept(req:any,next:any){
    let auth=this.inj.get(DataService);
    let tokenizedreq=req.clone(
      {
        setHeaders:
        {
          Authorization:`Bearer ${auth.getToken()}`
        }
      }
    )
    return next.handle(tokenizedreq);
  }
}
