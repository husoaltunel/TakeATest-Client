import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListExamComponent } from './list-exam.component';

const routes: Routes = [
  {path:"",component:ListExamComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListExamRoutingModule { }
