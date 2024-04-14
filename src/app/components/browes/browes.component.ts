import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-browes',
  templateUrl: './browes.component.html',
  styleUrls: ['./browes.component.scss']
})
export class BrowesComponent {

  auth = inject(AuthService)

  name = JSON.parse(sessionStorage.getItem('netflix_user')!).name
  email = JSON.parse(sessionStorage.getItem('netflix_user')!).email
  picture = JSON.parse(sessionStorage.getItem('netflix_user')!).picture


  signOut() {
    this.auth.signOut();
  }

}
