import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContentComponent } from './components/content/content.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ItemComponent } from './components/item/item.component';
import { StarComponent } from './components/star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    AsideComponent,
    ContentComponent,
    CarouselComponent,
    ItemComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
