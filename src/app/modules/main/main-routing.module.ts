import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {HomeComponent} from "./home/home.component";
import {MainIaComponent} from "./main-ia/main-ia.component";

const routes: Routes = [
  {path: '', children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'main-ia', component: MainIaComponent },
      { path: '**', redirectTo: 'home' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
