import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthNavbarComponent } from './navigation-layout/auth-navbar/auth-navbar.component';
import { PublicNavbarComponent } from './navigation-layout/public-navbar/public-navbar.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { MaterialModule } from "../shared/material.module";

@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent,
    AuthNavbarComponent,
    PublicNavbarComponent,
    PublicLayoutComponent,
    FooterLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ]
})
export class LayoutModule { }
