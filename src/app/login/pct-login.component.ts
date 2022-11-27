import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pctLogoData } from '../image-data';

@Component({
  selector: 'app-pct-login',
  templateUrl: './pct-login.component.html',
  styleUrls: ['./pct-login.component.css'],
})
export class PctLoginComponent implements OnInit {
  userName = '';
  pctlogo = pctLogoData;
  constructor(private router: Router) {}

  ngOnInit() {
    const cu = localStorage['curretn-user'];
    if (cu != null && cu.length > 0) {
      this.router.navigate(['/']);
    }
  }

  loginHandler() {
    if (this.userName.length > 0) {
      localStorage['current-user'] = this.userName;
      this.router.navigate(['/']);
    }
    else{
      alert('Bitte gebe dienen Namen ein!')
    }
  }
}
