import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DMilanComponent } from './d-milan/d-milan.component';
import { SearchdmilanComponent } from './searchdmilan/searchdmilan.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'searchdmilan',component: SearchdmilanComponent},
  { path: 'd-milan', component: DMilanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }