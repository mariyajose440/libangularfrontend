import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { AddauthComponent } from './addauth/addauth.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthComponent } from './auth/auth.component';
import { AuthsComponent } from './auths/auths.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImgComponent } from './img/img.component';
import { LoginComponent } from './login/login.component';
import { ReadauthComponent } from './readauth/readauth.component';
import { ReadbookComponent } from './readbook/readbook.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateauthComponent } from './updateauth/updateauth.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AddauthComponent,
    AddbookComponent,
    AuthComponent,
    AuthsComponent,
    BookComponent,
    BooksComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ImgComponent,
    LoginComponent,
    ReadauthComponent,
    ReadbookComponent,
    SignupComponent,
    UpdateauthComponent,
    UpdatebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
