import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './AllComponent/register/register.component';
import { LoginComponent } from './AllComponent/login/login.component';
import { ProfileComponent } from './AllComponent/profile/profile.component';
import { AboutusComponent } from './AllComponent/aboutus/aboutus.component';
import { JobinternshipComponent } from './AllComponent/jobinternship/jobinternship.component';
import { JobcarouselComponent } from './AllComponent/jobcarousel/jobcarousel.component';
import { AlreadyappliedComponent } from './AllComponent/alreadyapplied/alreadyapplied.component';
import { HomeComponent } from './AllComponent/home/home.component';
import { HrDashComponent } from './AllComponent/HRDashboard/hr-dash/hr-dash.component';
import { PostJobComponent } from './AllComponent/HRDashboard/post-job/post-job.component';
import { UploadresumeComponent } from './AllComponent/uploadresume/uploadresume.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Hr-Dash',component:HrDashComponent},
  { path: 'resumeupload', component:UploadresumeComponent },
  {path:'PostJob',component:PostJobComponent},
  {component:RegisterComponent,path:'register'},
  {component:LoginComponent,path:'login'},
  {component:ProfileComponent,path:'profile'},
  {path:'aboutus',component:AboutusComponent},
  {path:'jobinternship',component:JobinternshipComponent},
  {path:'jobcarousel',component:JobcarouselComponent},
  {path:'alreadyapplied',component:AlreadyappliedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
