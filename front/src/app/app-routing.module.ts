import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionLayoutComponent } from './layout/inscription-layout/inscription-layout.component';
import { ErrorComponent } from './views/error/error.component';

const routes: Routes = [
  {
    path: '', component:InscriptionLayoutComponent,children:[
      
    ]
  },
  { path: 'erreur', component: ErrorComponent },
  { path: '**', redirectTo: '/erreur' } // Redirect all unknown routes to the error page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
