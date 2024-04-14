import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BrowesComponent } from './components/browes/browes.component';


const routes: Routes = [

  {
    path: '',
    pathMatch: 'full', 
    component:LoginComponent
    // loadComponent: () => import('./components/login/login.component').then(a => a.LoginComponent)
  },
  {
    path: 'browse',
    component:BrowesComponent
    // loadComponent: () => import('./components/browes/browes.component').then((a) => a.BrowesComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
