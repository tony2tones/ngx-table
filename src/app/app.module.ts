import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable'; 
import { FancyLoader } from './shared/loader/fancyLoader.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    FancyLoader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
