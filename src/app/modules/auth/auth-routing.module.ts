import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthSignInComponent} from "./auth-sign-in/auth-sign-in.component";
import {AuthSignUpComponent} from "./auth-sign-up/auth-sign-up.component";

const routes: Routes = [
  {path: '', children: [
      { path: 'sign-in', component: AuthSignInComponent },
      { path: 'sign-up', component: AuthSignUpComponent },
      { path: '**', redirectTo: 'sign-in' },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
