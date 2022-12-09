import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewcomComponent } from './newcom/newcom.component';
import { Newcom2Component } from './newcom2/newcom2.component';



@NgModule({
  declarations: [
    NewcomComponent,
    Newcom2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewcomComponent,
    Newcom2Component
  ]
})
export class NewModuleModule { }
