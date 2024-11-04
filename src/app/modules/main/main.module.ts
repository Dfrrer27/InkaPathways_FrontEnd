import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainIaComponent } from './main-ia/main-ia.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    MainIaComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterLink
  ]
})
export class MainModule { }
