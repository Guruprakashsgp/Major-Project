import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './login-page/sign-in/sign-in.component';
import { SignUpComponent } from './login-page/sign-up/sign-up.component';
import { ForgetPassComponent } from './login-page/forget-pass/forget-pass.component';
import { OtpComponent } from './login-page/otp/otp.component';
import { NewPassComponent } from './login-page/new-pass/new-pass.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'landingPage', pathMatch:'full'},
  {path:'homePage', component:HomeComponent },
  {component:LoginPageComponent,path:"Login",
  children:[
    {path:'',redirectTo:'signIn',pathMatch:'full'},
    {path:'signIn', component: SignInComponent },
    {path:'signUp', component: SignUpComponent },
    {path:'forgotPass', component: ForgetPassComponent},
    {path: 'otp', component: OtpComponent},
    {path: 'newPass', component: NewPassComponent}
  ]},
  {path:'landingPage', component:LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
