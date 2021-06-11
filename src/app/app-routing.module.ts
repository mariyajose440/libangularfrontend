import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AddauthComponent } from './addauth/addauth.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { AuthsComponent } from './auths/auths.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { ImgComponent } from './img/img.component';
import { LoginComponent } from './login/login.component';
import { ReadauthComponent } from './readauth/readauth.component';
import { ReadbookComponent } from './readbook/readbook.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateauthComponent } from './updateauth/updateauth.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [{ path:'',component:HomeComponent},
                        { path:'home',component:HomeComponent},
                        { path:'add',component:AddComponent,
                                children:[{path:'',component:ImgComponent},
                                          {path:'addbook',canActivate:[AuthGuard] ,component:AddbookComponent},
                                          {path:'addauth',canActivate:[AuthGuard] ,component:AddauthComponent}]},
                        { path:'book',component:BookComponent,
                                children:[{path:'',component:BooksComponent},
                                          {path:'readmore',canActivate:[AuthGuard] ,component:ReadbookComponent},
                                          {path:'update',canActivate:[AuthGuard] ,component:UpdatebookComponent}]},
                        { path:'auth',component:AuthComponent,
                                children:[{path:'',component:AuthsComponent},
                                          {path:'readmore',canActivate:[AuthGuard] ,component:ReadauthComponent},
                                          {path:'update',canActivate:[AuthGuard] ,component:UpdateauthComponent}]},
                        { path:'login',component:LoginComponent},
                        { path:'signup',component:SignupComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
