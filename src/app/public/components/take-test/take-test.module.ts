import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeTestRoutingModule } from './take-test-routing.module';
import { TakeTestComponent } from './take-test.component';


@NgModule({
  declarations: [
    TakeTestComponent
  ],
  imports: [
    CommonModule,
    TakeTestRoutingModule
  ]
})
export class TakeTestModule { }
