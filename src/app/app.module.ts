import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingScreenComponent } from './screens/landing-screen/landing-screen.component';
import { DetailScreenComponent } from './screens/detail-screen/detail-screen.component';
import { QualificationScreenComponent } from './screens/qualification-screen/qualification-screen.component';
import { SkillScreenComponent } from './screens/skill-screen/skill-screen.component';
import { ServicesScreenComponent } from './screens/services-screen/services-screen.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { EducationInfoCardComponent } from './screens/qualification-screen/components/education-info-card/education-info-card.component';
import { ExperienceInfoCardComponent } from './screens/qualification-screen/components/experience-info-card/experience-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    DetailScreenComponent,
    QualificationScreenComponent,
    SkillScreenComponent,
    ServicesScreenComponent,
    NavbarComponentComponent,
    ContactScreenComponent,
    ButtonComponentComponent,
    HeaderComponentComponent,
    EducationInfoCardComponent,
    ExperienceInfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
