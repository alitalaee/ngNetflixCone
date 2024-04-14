declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  router=  inject(Router);

  ngOnInit() {
    google.accounts.id.initialize({
      client_id: "1008579717041-224t35fi2ubm691i4q5pi23lvgdpr0e3.apps.googleusercontent.com",
      callback: (res: any) => {
        this.handleSocialLogin(res)
      }
    })

    google.accounts.id.renderButton(
      document.getElementById('google-btn'),
      {
        type: 'standard',
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangular',
        width: '400'
      })
  }


  checkJWT(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  // Hande Social Login 
  handleSocialLogin(response: any) {
    if (response) {
      //decode json 
      const credential = this.checkJWT(response.credential)
      console.log(credential);
      //set storage 
      sessionStorage.setItem('netflix_user' , JSON.stringify(credential));
      //navigate to home
      this.router.navigateByUrl('browse');
    }

  }

}
