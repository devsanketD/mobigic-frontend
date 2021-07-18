import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './views/signin/signin.component';

const routes: Routes = [{
  path: 'sign',
  component: SigninComponent,
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
