import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss']
})
export class AuthNavbarComponent {

  constructor(private router: Router,  private _authService: AuthService) {}

  logout(){
    this._authService.logout();
    this.router.navigate(['/auth/sign-in'])
  }

  goToSection(section: string) {
    this.router.navigateByUrl('/main/home').then(() => {
      setTimeout(() => {
        this.router.navigate(['/main/home'], { fragment: section });
      }, 50);
    });
  }

}
