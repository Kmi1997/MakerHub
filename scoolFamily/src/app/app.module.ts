import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternshipComponent } from './internships/internship/internship.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FourOfourComponent } from './shared/four-ofour/four-ofour.component';


@NgModule({
  declarations: [
    AppComponent,
    InternshipComponent,
    NavbarComponent,
    FourOfourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
