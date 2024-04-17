import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-intro-banner',
  templateUrl: './home-intro-banner.component.html',
  styleUrls: ['./home-intro-banner.component.scss']
})
export class HomeIntroBannerComponent {

  @Input('homeIntroBanners')  homeIntroBanners:any;

  // homeIntroBanners = [
  //   {
  //     title: 'Enjoy on your TV',
  //     subtitle: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
  //     banner: '../../../assets/tv.png',
  //     insideBanner: "../../../assets/video-tv-0819.m4v",
  //     decore: "right",
  //   },
  // ]
  // @Input('title') title?:string;
  // @Input('subtitle') subtitle?:string;
  // @Input('banner') banner:any;
  // @Input('insideBanner') insideBanner:any;
  // @Input('decore') decore?:boolean;






}
