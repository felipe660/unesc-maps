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
import { NgxPaginationModule } from 'ngx-pagination';
import { ClassPageComponent } from './class-page/class-page.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ArrayFilterClassPipe } from './components/pipes/array-class.pipe';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { CoursePageComponent } from './course-page/course-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    SplashScreenComponent,
    HomePageComponent,
    ArrayFilterPipe,
    ArrayDayPipe,
    ArrayFilterClassPipe,
    SelectMethodComponent,
    DayPageComponent,
    ClassPageComponent,
    RegisterTeacherComponent,
    TeachersPageComponent,
    CoursePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    NgxPaginationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ArrayDayPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
