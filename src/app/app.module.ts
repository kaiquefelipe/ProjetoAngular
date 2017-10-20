import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from "@angular/router";
import { AF } from './providers/af';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



// Exporting Settings
export const firebaseConfig = {
    apiKey: "AIzaSyAMT9pDzS0VZPnZ9zlRsheWoXjxxnF1F-g",
    authDomain: "firkfinances.firebaseapp.com",
    databaseURL: "https://firkfinances.firebaseio.com",
    storageBucket: "firkfinances.appspot.com",
    messagingSenderId: "383694320023"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
