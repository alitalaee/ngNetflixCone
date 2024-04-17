import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowesComponent } from './pages/browes/browes.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';


// Swiper 
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component';
import { SwiperDirective } from './shared/directives/swiper.directive';
import { SwiperconfigDirective } from './shared/directives/swiperconfig.directive';
import { HomeIntroBannerComponent } from './shared/components/home-intro-banner/home-intro-banner.component';
import { HomeIntroComponent } from './shared/components/home-intro/home-intro.component';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrowesComponent,
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
    SwiperDirective,
    SwiperconfigDirective,
    HomeIntroBannerComponent,
    HomeIntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
