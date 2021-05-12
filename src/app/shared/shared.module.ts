import { SetColorDirective } from './set-color.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SetColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SetColorDirective
  ]
})
export class SharedModule { }
