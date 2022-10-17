import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMaps } from '@ionic-native/google-maps';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [Geolocation, FormBuilder,
  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
