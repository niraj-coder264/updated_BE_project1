import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './AllComponent/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './AllComponent/login/login.component';
import { ProfileComponent } from './AllComponent/profile/profile.component';
import { AboutusComponent } from './AllComponent/aboutus/aboutus.component';
import { AlreadyappliedComponent } from './AllComponent/alreadyapplied/alreadyapplied.component';
import { FooterComponent } from './AllComponent/footer/footer.component';
import { HomeComponent } from './AllComponent/home/home.component';
import { JobcarouselComponent } from './AllComponent/jobcarousel/jobcarousel.component';
import { JobinternshipComponent } from './AllComponent/jobinternship/jobinternship.component';
import { NavbarComponent } from './AllComponent/navbar/navbar.component';
import { HrDashComponent } from './AllComponent/HRDashboard/hr-dash/hr-dash.component';
import { PostJobComponent } from './AllComponent/HRDashboard/post-job/post-job.component';
import { UploadresumeComponent } from './AllComponent/uploadresume/uploadresume.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AboutusComponent,
    AlreadyappliedComponent,
    FooterComponent,
    HomeComponent,
    JobcarouselComponent,
    JobinternshipComponent,
    NavbarComponent,
    HrDashComponent,
    PostJobComponent,
    UploadresumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // Provider for HttpClient - no need for modifications
    HttpClient,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
