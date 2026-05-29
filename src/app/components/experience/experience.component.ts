import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences = [
    {
      company: 'Kelsoft',
      role: 'Software Developer',
      description:
        'Desarrollo de aplicaciones utilizando .NET y Angular. Integración de APIs REST y optimización de procesos.'
    },

    {
      company: 'Accenture',
      role: 'Software Developer',
      description:
        'Participación en proyectos empresariales utilizando .NET, SQL Server y servicios de integración.'
    },

    {
      company: 'DIRECTV',
      role: 'Software Developer',
      description:
        'Desarrollo y mantenimiento de soluciones orientadas al sector comercial / financiero / técnico de la empresa'
    }
  ];

}
