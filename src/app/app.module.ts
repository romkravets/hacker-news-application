import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';

import { HackerNewsAPIService } from './hackernews-api.service';
import { NgArrayPipesModule, NgStringPipesModule } from 'angular-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    NgArrayPipesModule,
    NgStringPipesModule
  ],
  providers: [HackerNewsAPIService,
    HttpClientModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
