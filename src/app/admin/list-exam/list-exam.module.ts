import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExamRoutingModule } from './list-exam-routing.module';
import { ListExamComponent } from './list-exam.component';


@NgModule({
  declarations: [
    ListExamComponent
  ],
  imports: [
    CommonModule,
    ListExamRoutingModule
  ]
})
export class ListExamModule { }
