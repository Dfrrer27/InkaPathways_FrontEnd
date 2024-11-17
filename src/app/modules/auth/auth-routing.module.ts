import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthSignInComponent} from "./auth-sign-in/auth-sign-in.component";
import {AuthSignUpComponent} from "./auth-sign-up/auth-sign-up.component";
import {authNoGuard} from "../../utils/auth-no.guard";

const routes: Routes = [
  {path: '', children: [
      { path: 'sign-in', component: AuthSignInComponent, canActivate: [authNoGuard] },
      { path: 'sign-up', component: AuthSignUpComponent, canActivate: [authNoGuard] },
      { path: '**', redirectTo: 'sign-in' },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
