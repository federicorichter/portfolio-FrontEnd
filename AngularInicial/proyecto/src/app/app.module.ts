import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UpheaderComponent } from './components/upheader/upheader.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpheaderComponent,
    BannerComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RichTextEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
