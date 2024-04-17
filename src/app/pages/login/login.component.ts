declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  router = inject(Router);

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
      sessionStorage.setItem('netflix_user', JSON.stringify(credential));
      //navigate to home
      this.router.navigateByUrl('browse');
    }

  }



  // Home Introduction banners Contennt 
  homeIntroBanners = [
    {
      title: 'Enjoy on your TV',
      subtitle: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      banner: '../../../assets/tv.png',
      insideBanner: "../../../assets/video-tv-0819.m4v",
      decore: "right",
    },
    {
      title: 'Download your programmes to watch offline',
      subtitle: 'Save your favourites easily and always have something to watch.',
      banner: '',
      insideBanner: "../../../assets/download.mov",
      decore: "left",
    },
    {
      title: 'Watch everywhere',
      subtitle: 'Stream unlimited films and TV programmes on your phone, tablet, laptop and TV.',
      banner: '../../../assets/device-pile.png',
      insideBanner: "../../../assets/video-devices.m4v",
      videoCssClass:"top-[41px] w-[312px] left-[98px] absolute  h-[211px]",
      decore: "right",
    }
  ]
}
