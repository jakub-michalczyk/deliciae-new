import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Slide, Slider } from 'src/global/interfaces';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import Swiper from 'swiper/types/swiper-class';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @ViewChild(SwiperComponent) swiper = {} as SwiperComponent;
  @Input() data = {} as Slider;
  swiperConfig: SwiperOptions = {
    spaceBetween: 20,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      800: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}

  swipePrev() {
    this.swiper.swiperRef.slidePrev();
  }
  swipeNext() {
    this.swiper.swiperRef.slideNext();
  }
}
