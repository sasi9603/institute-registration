import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';
import { LoginComponent } from './login/login.component';
import { MinisteryLoginComponent } from './ministery-login/ministery-login.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { StudentRegisterComponent } from './student-register/student-register.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"new-registration",component:NewRegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"student-register",component:StudentRegisterComponent},
  {path:"institute-register",component:InstituteRegisterComponent},
  {path:"ministery-login",component:MinisteryLoginComponent},
  {path:"institute-login",component:InstituteLoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
