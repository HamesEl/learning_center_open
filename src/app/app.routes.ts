import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {ContactComponent} from "./public/pages/contact/contact.component";
//import {CourseManagementComponent} from "./learning/pages/course-management/course-management.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: 'about',            component: AboutComponent },
  { path: 'contact',            component: ContactComponent },
  // { path: 'learning/courses', component: CourseManagementComponent},
  { path: '',                 redirectTo: 'home', pathMatch: 'full' },
  { path: '**',               component: PageNotFoundComponent }
];

