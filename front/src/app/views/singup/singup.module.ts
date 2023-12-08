import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingupRoutingModule } from './singup-routing.module';
import { SingupComponent } from './singup/singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SingupComponent
  ],
  imports: [
    CommonModule,
    SingupRoutingModule , 
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule
  ] ,

})
export class SingupModule { }
