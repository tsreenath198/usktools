import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchdmilanComponent } from './searchdmilan/searchdmilan.component';
import { KLevelComponent } from './k-level/k-level.component';
import { YuvanComponent } from './yuvan/yuvan.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'searchdmilan', component: SearchdmilanComponent },
  { path: 'yuvan', component: YuvanComponent },
  { path: 'k-level', component: KLevelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }