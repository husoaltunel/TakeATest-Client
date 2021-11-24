import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateExamRoutingModule } from './create-exam-routing.module';
import { CreateExamComponent } from './create-exam.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateExamComponent
  ],
  imports: [
    CommonModule,
    CreateExamRoutingModule,
    FormsModule
  ]
})
export class CreateExamModule { }
