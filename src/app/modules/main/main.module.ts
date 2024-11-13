import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainIaComponent } from './main-ia/main-ia.component';
import { RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../shared/material.module";
import { GeneratePapersOneComponent } from './main-ia/generate-papers-one/generate-papers-one.component';
import { GeneratePapersTwoComponent } from './main-ia/generate-papers-two/generate-papers-two.component';
import { GeneratePapersThreeComponent } from './main-ia/generate-papers-three/generate-papers-three.component';
import { GeneratePapersFourComponent } from './main-ia/generate-papers-four/generate-papers-four.component';
import { GeneratePapersFiveComponent } from './main-ia/generate-papers-five/generate-papers-five.component';
import { GeneratePapersSixComponent } from './main-ia/generate-papers-six/generate-papers-six.component';
import { StepStoryComponent } from './main-ia/step-story/step-story.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    MainIaComponent,
    GeneratePapersOneComponent,
    GeneratePapersTwoComponent,
    GeneratePapersThreeComponent,
    GeneratePapersFourComponent,
    GeneratePapersFiveComponent,
    GeneratePapersSixComponent,
    StepStoryComponent
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
