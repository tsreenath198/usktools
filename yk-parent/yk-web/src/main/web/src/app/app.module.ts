import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DMilanComponent } from "./d-milan/d-milan.component";

import { HttpService } from "./http.service";
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchdmilanComponent } from './searchdmilan/searchdmilan.component';

@NgModule({
  declarations: [
    AppComponent,
    DMilanComponent,
    LoginComponent,
    SearchdmilanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
