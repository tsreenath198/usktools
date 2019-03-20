import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpService } from "./http.service";
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchdmilanComponent } from './searchdmilan/searchdmilan.component';
import { KLevelComponent } from './k-level/k-level.component';
import { YuvanComponent } from './yuvan/yuvan.component';
import { SearchklevelComponent } from './k-level/search/searchklevel/searchklevel.component';
import { FilterPipe } from './filter-pipe/filter.pipe';

@NgModule({
  declarations: [
    
    AppComponent,
    YuvanComponent,
    LoginComponent,
    SearchdmilanComponent,
    KLevelComponent,
    SearchklevelComponent,
    FilterPipe
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
