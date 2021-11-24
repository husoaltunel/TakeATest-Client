import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path:"",component:AdminComponent},
  {path:"create-exam",component:AdminComponent ,loadChildren:()=>import("./create-exam/create-exam.module").then(m=> m.CreateExamModule)},
  {path:"list-exam",component:AdminComponent ,loadChildren:()=>import("./list-exam/list-exam.module").then(m=> m.ListExamModule)}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
