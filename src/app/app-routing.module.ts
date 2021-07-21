import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';

const routes: Routes = [{
  path: 'sign',
  component: SigninComponent,
}, {
  path: 'signup',
  component: SignupComponent,
}, {
  path: 'showimage',
  component: DialogComponent,
}, {
  path: '',
  loadChildren: () => import(`./layout/layout.module`).then(m => m.LayoutModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
