import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CastteamComponent } from './components/castteam/castteam.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "about", component: AboutComponent},
  { path: "castR", component: CastteamComponent},
  { path: "home", component: LandingPageComponent},
  { path: "coming",component: UpcomingComponent},
  { path: "signup", component: RegisterComponent},
  { path: "login", component: LoginComponent},
  { path: "forgotPassword", component:ForgotPasswordComponent},
  { path: "register",component:RegisterComponent},
  { path: "watchList", component:WatchListComponent}
  //redirect to watchList after login
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
