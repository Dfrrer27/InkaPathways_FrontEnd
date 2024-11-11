import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.scss']
})
export class PublicNavbarComponent {

  constructor(private router: Router) {}

  goToSection(section: string) {
    this.router.navigateByUrl('/home').then(() => {
      setTimeout(() => {
        this.router.navigate(['/home'], { fragment: section });
      }, 50);
    });
  }

}
