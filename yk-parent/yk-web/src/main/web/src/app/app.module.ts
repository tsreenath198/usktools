import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpService } from "./http.service";
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { KLevelComponent } from './k-level/k-level.component';
import { YuvaComponent } from './yuva/yuva.component';
import { SearchklevelComponent } from './k-level/search/searchklevel.component';
import { FilterPipe } from './filter-pipe/filter.pipe';
import { SearchyuvaComponent } from './yuva/search/searchyuva.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    
    AppComponent,
    YuvaComponent,
    LoginComponent,
    SearchyuvaComponent,
    KLevelComponent,
    SearchklevelComponent,
    FilterPipe,
    LandingComponent
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
