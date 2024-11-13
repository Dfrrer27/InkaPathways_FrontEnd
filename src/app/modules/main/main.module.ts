import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainIaComponent } from './main-ia/main-ia.component';
import { RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../shared/material.module";


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    MainIaComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterLink,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
