
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { IVideoContent } from '../../models/video-content.interface';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
})
export class MovieCarouselComponent {
  swiperMovieConfig: SwiperOptions = { spaceBetween: 10, slidesPerView: 4, freeMode: true, watchSlidesProgress: true }

  @Input('IVideoContent') IVideoContent?: IVideoContent[];
  @Input('header') header?:string;

}