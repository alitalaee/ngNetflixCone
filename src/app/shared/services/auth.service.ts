declare var google: any;

import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = inject(Router)
  signOut() {

    google.accounts.id.disableAutoSelect()

    //remvoe session 
    sessionStorage.removeItem('netflix_user');

    // redirect to home 
    this.router.navigateByUrl('');
  }
  constructor() { }
}
