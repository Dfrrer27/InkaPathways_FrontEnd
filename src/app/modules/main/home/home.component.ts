import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private route: ActivatedRoute, private router: Router, private _authService: AuthService) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }
    });
  }

  navigate() {
    const tokenData = this._authService.getToken();
    if (tokenData) {
      const tokenObj = JSON.parse(tokenData);
      const token = tokenObj.token_verificacion;

      this.router.navigate(['/main/main-ia']);
    } else {
      this.router.navigate(['/auth/sign-up']);
    }
  }
}
