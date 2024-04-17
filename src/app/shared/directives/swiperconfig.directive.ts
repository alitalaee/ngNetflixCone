import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[swiperConfig]'
})
export class SwiperconfigDirective implements AfterViewInit {
  @Input() config?: SwiperOptions;

  constructor(private el: ElementRef<SwiperContainer>) { }
  ngAfterViewInit(): void {
    Object.assign(this.el.nativeElement, this.config);
    this.el.nativeElement.initialize();
  }

}
