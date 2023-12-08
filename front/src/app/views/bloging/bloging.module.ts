import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogingRoutingModule } from './bloging-routing.module';
import { BlogingComponent } from './bloging/bloging.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BlogingComponent
  ],
  imports: [
    CommonModule,
    BlogingRoutingModule , 
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule
  ]
})
export class BlogingModule { }
