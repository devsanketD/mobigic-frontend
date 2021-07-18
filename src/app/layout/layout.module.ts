import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from '../component/header/header.component';
import { LeftMenuComponent } from '../component/left-menu/left-menu.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LeftMenuComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
  ]
})
export class LayoutModule { }
