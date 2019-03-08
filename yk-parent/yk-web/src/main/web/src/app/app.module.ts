import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DMilanComponent } from "./d-milan/d-milan.component";

import { HttpService } from "./http.service";
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchdmilanComponent } from './searchdmilan/searchdmilan.component';
import { KLevelComponent } from './k-level/k-level.component';

@NgModule({
  declarations: [
    
    AppComponent,
    DMilanComponent,
    LoginComponent,
    SearchdmilanComponent,
    KLevelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
