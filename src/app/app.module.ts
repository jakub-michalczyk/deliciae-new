import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { IconsMenuComponent } from './icons-menu/icons-menu.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent, IconsMenuComponent, HeroImageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
