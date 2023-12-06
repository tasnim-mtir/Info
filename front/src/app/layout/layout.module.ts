import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InscriptionLayoutComponent } from './inscription-layout/inscription-layout.component';

@NgModule({
  declarations: [
    InscriptionLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
