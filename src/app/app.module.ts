import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddCacheComponent } from './add-cache/add-cache.component';
import { ListCacheComponent } from './list-cache/list-cache.component';
import { DetailCacheComponent } from './detail-cache/detail-cache.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AddCacheComponent,
    ListCacheComponent,
    DetailCacheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
