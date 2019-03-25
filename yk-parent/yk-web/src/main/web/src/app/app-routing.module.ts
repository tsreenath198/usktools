import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchdmilanComponent } from './searchdmilan/searchdmilan.component';
import { KLevelComponent } from './k-level/k-level.component';
import { YuvanComponent } from './yuvan/yuvan.component';
import { SearchklevelComponent } from './k-level/search/searchklevel/searchklevel.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'searchdmilan', component: SearchdmilanComponent },
  { path: 'yuvan', component: YuvanComponent },
  { path: 'k-level', component: KLevelComponent },
  { path:'searchklevel' , component: SearchklevelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }