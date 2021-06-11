import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public ser:DataService,public router:Router){}
  canActivate(): boolean
    {
      if(this.ser.loggedIn())
        return true;
      else
        this.router.navigate(['/']);
        return false;
    } 
  }
  
