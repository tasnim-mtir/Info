import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogingComponent } from './bloging/bloging.component';

const routes: Routes = [
  { path:'', component:BlogingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogingRoutingModule { }
