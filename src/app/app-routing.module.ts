import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './map-page/map-page.component';


const routes: Routes = [
  { component: MapPageComponent, path: 'map',pathMatch: 'full'},
  { component: HomePageComponent, path: 'home-page'},
  { component: SplashScreenComponent, path: 'splash-screen'},
{
  path: '',
  redirectTo: '/home-page',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
