import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {PublicLayoutComponent} from "./layout/public-layout/public-layout.component";
import {HomeComponent} from "./modules/main/home/home.component";
import {ContactUsComponent} from "./modules/main/contact-us/contact-us.component";
import {authGuard} from "./utils/auth.guard";

const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(x => x.AuthModule)
  },

  { path: 'main',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    loadChildren: () => import('./modules/main/main.module').then(x => x.MainModule)
  },

  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
