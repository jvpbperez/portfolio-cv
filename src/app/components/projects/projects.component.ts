import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [

    {
      title: 'Plataforma Telecom / Facturación Online',
      description:
        'Participación en la transformación digital de plataformas Telecom orientadas a facturación online y autogestión de clientes. Desarrollo Full Stack utilizando Angular y .NET, implementando funcionalidades escalables, APIs REST, autenticación JWT y componentes reutilizables.'
    },

    {
      title: 'Plataforma E-Commerce / Portal Comercial',
      description:
      'Desarrollo Full Stack de plataforma E-Commerce enfocada en gestión de productos, campañas comerciales y configuración dinámica de servicios. Implementación de frontend modular en Angular y backend .NET con APIs REST, autenticación y arquitectura escalable.'
    },
        {
      title: 'Aplicaciones Corporativas – SURA',
      description:
        'Desarrollo y mantenimiento de aplicaciones web basadas en ASP.NET Web Forms y .NET Framework, enfocadas en gestión de pagos de pólizas y rendición de gastos operativos. Utilización de ADO.NET para acceso a datos, JavaScript para funcionalidades frontend, log4net para trazabilidad y TFS para control de versiones y gestión del proyecto'
    },
    {
      title: 'Sistema de Gestión de Productos – Tenaris',
      description:
        'Desarrollo y mantenimiento de aplicativo corporativo orientado a la gestión de productos utilizando arquitectura MVC y tecnologías .NET. Participación en mejoras funcionales, mantenimiento evolutivo y optimización de procesos internos del sistema.'
    },
  ];

}
