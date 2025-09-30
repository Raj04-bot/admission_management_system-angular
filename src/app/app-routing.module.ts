import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'logout', component: LogoutComponent },
  // Add other routes as needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
