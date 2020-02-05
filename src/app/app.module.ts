import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { PortfolioServerService } from './services/portfolio-server.service';


import { RouterModule } from '@angular/router';
import { EnglishComponent } from './components/english/english.component';
import { EspanolComponent } from './components/espanol/espanol.component';

@NgModule({
  declarations: [
    AppComponent,
    EnglishComponent,
    EspanolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
    
  ],
  providers: [PortfolioServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
