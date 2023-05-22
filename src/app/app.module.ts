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
import { SelectMethodComponent } from './select-method/select-method.component';
import { DayPageComponent } from './day-page/day-page.component';
import { PaginationControlsComponentComponent } from './components/pagination-controls-component/pagination-controls-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    SplashScreenComponent,
    HomePageComponent,
    ArrayFilterPipe,
    ArrayDayPipe,
    SelectMethodComponent,
    DayPageComponent,
    PaginationControlsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ArrayDayPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
