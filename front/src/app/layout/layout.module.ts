import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InscriptionLayoutComponent } from './inscription-layout/inscription-layout.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    InscriptionLayoutComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,
    FormsModule
    
  ]
})
export class LayoutModule { }
