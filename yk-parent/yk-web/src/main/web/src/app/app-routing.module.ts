import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { KLevelComponent } from './k-level/k-level.component';
import { YuvaComponent } from './yuva/yuva.component';
import { SearchklevelComponent } from './k-level/search/searchklevel.component';
import { SearchyuvaComponent } from './yuva/search/searchyuva.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'searchyuva', component: SearchyuvaComponent },
  { path: 'yuva', component: YuvaComponent },
  { path: 'k-level', component: KLevelComponent },
  { path:'searchklevel' , component: SearchklevelComponent},
  {path:'landing' , component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }