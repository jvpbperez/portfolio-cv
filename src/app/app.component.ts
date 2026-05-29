import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    HeaderComponent,
    TechnologiesComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}