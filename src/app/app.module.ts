import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DashboardModule } from './dashboard/dashboard.module';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';

import { SigninComponent } from './views/signin/signin.component';
import { AppComponent } from './app.component';

import { SidenavService } from './services/sidenav.service';

import { Router } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToastrModule } from 'ngx-toastr';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    FlexLayoutModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
  })

  ],
  providers: [SidenavService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {
  constructor(private router: Router) {
    // this.router.navigate(['dashboard']);
  }
}
