import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPortalComponent } from './main-routes/admin-portal/admin-portal.component';
import { LandingPageComponent } from './main-routes/landing-page/landing-page.component';
import { LoginPageComponent } from './main-routes/login-page/login-page.component';



const routes: Routes = [

  // { path: 'login', component: LoginPageComponent },
  {
    path: 'admin', component: AdminPortalComponent,
    children: [
    ]
  },
  { path: '', component: LandingPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
