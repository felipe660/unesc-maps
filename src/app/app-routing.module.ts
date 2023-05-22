import { DayPageComponent } from './day-page/day-page.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './map-page/map-page.component';
import { SelectMethodComponent } from './select-method/select-method.component';


const routes: Routes = [
  { component: MapPageComponent, path: 'map',pathMatch: 'full'},
  { component: HomePageComponent, path: 'home-page',pathMatch: 'full'},
  { component: SplashScreenComponent, path: 'splash-screen'},
  { component: SelectMethodComponent, path: 'method'},
  { component: DayPageComponent, path:'day'},
  {
    path: '',
    redirectTo: '/method',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
