import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {path:"" ,component:PublicComponent,loadChildren:()=>import("./components/home/home.module").then(m=> m.HomeModule),canActivate:[AuthGuard]},
  {path:"login" ,loadChildren:()=>import("./components/login/login.module").then(m=> m.LoginModule)},
  {path:"take-test" ,component:PublicComponent,loadChildren:()=>import("./components/take-test/take-test.module").then(m=> m.TakeTestModule),canActivate:[AuthGuard]},
  {path:"test/:id" ,component:PublicComponent,loadChildren:()=>import("./components/test/test.module").then(m=> m.TestModule),canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
