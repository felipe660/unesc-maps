import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapPageComponent } from './map-page/map-page.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { ArrayFilterPipe } from './components/pipes/array-filter.pipe';
import { ArrayDayPipe } from './components/pipes/array-day.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    SplashScreenComponent,
    HomePageComponent,
    ArrayFilterPipe,
    ArrayDayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }