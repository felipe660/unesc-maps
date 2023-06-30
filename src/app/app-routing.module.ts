import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { ClassPageComponent } from './class-page/class-page.component';
import { DayPageComponent } from './day-page/day-page.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './map-page/map-page.component';
import { SelectMethodComponent } from './select-method/select-method.component';


const routes: Routes = [
  { component: SelectMethodComponent, path: ''},
  { component: SplashScreenComponent, path: 'splash-screen'},
  { component: HomePageComponent, path: 'home-page'},
  { component: ClassPageComponent, path:'class-page'},
  { component: MapPageComponent, path: 'map'},
  { component: DayPageComponent, path:'day'},
  { component: RegisterTeacherComponent, path:'registerTeacher'},
  { component: TeachersPageComponent, path:'professores'},
  { component: CoursePageComponent, path:'cursos'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
