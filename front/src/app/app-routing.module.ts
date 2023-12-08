import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionLayoutComponent } from './layout/inscription-layout/inscription-layout.component';
import { ErrorComponent } from './views/error/error.component';
import { BlogComponent } from './layout/blog/blog.component';

const routes: Routes = [
  {
    path: '', component:InscriptionLayoutComponent,children:[
      { path:'', loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule) },
      { path:'singup', loadChildren: () => import('./views/singup/singup.module').then(m => m.SingupModule) },
      { path:'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule) },

    ]
  },
  {
    path: '', component:BlogComponent,children:[
      { path:'blogs', loadChildren: () => import('./views/bloging/bloging.module').then(m => m.BlogingModule) },

    ]
  },
  { path: 'erreur', component: ErrorComponent },
  { path: '**', redirectTo: '/erreur' }, // Redirect all unknown routes to the error page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
