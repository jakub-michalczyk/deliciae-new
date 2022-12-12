import { Component } from '@angular/core';
import { Slide, Slider } from 'src/global/interfaces';
import Swiper from 'swiper/types/swiper-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  christmasSlider: Slider = {
    title: 'Święta coraz bliżej!',
    subtitle: 'Obdaruj swoich najbliższych podarunkami',
    slides: [
      {
        id: 0,
        img: 'home_bg.jpg',
      },
      {
        id: 0,
        img: 'home_bg.jpg',
      },
      {
        id: 0,
        img: 'home_bg.jpg',
      },
      {
        id: 0,
        img: 'home_bg.jpg',
      },
      {
        id: 0,
        img: 'home_bg.jpg',
      },
      {
        id: 0,
        img: 'home_bg.jpg',
      },
    ],
  };
}
