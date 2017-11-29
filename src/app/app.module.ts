import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContentComponent } from './components/content/content.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ItemComponent } from './components/item/item.component';
import { StarComponent } from './components/star/star.component';
import { AboutComponent } from './components/about/about.component';
import { TelAboutComponent } from './components/tel-about/tel-about.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { DataService } from './service/DataService';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    AsideComponent,
    ContentComponent,
    CarouselComponent,
    ItemComponent,
    StarComponent,
    AboutComponent,
    TelAboutComponent,
    Test1Component,
    Test2Component,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
