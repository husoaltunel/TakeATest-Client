import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  { path: "", loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: "admin",canActivate:[AdminAuthGuard], loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
