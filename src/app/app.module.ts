import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { IconsMenuComponent } from './icons-menu/icons-menu.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { ModalRightComponent } from './core-components/modal-right/modal-right.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { ModalToggleDirective } from './directives/modal-toggle.directive';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    IconsMenuComponent,
    HeroImageComponent,
    ModalRightComponent,
    ModalToggleDirective,
    MobileMenuComponent,
    CarouselComponent,
    ProductCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
