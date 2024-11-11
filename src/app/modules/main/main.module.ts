import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainIaComponent } from './main-ia/main-ia.component';
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";


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
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MainModule { }
