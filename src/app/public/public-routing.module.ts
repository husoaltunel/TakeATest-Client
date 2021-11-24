import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {path : "" ,component : PublicComponent,},
  {path:"login" ,loadChildren:()=>import("./components/login/login.module").then(m=> m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
