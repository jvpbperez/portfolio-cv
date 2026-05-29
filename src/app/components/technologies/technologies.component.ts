import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  backend = [
    'C#',
    '.NET Framework',
    '.NET 6/7/8',
    'ASP.NET Core',
    'Web API',
    'MVC',
    'Web Forms',
    'Entity Framework',
    'ADO.NET',
    'REST APIs',
    'JWT'
  ];

  databases = [
    'SQL Server',
    'MySQL',
    'PostgreSQL',
    'Stored Procedures',
    'ETL',
    'Data Modeling'
  ];

  frontend = [
    'Angular 17/18',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'Angular Material',
    'Bootstrap'
  ];

  integration = [
    'MuleSoft',
    'Anypoint Studio',
    'DataWeave',
    'RAML',
    'JSON',
    'XML',
    'HTTP Connector'
  ];

  devops = [
    'Docker',
    'OpenShift (OCP)',
    'CI/CD',
    'Git',
    'GitHub',
    'GitLab',
    'TFS'
  ];

  tools = [
    'Postman',
    'Visual Studio',
    'VS Code',
    'Jira',
    'Confluence',
    'log4net'
  ];

  aiTools = [
    'GitHub Copilot Chat',
    'ChatGPT',
    'Google Gemini'
  ];

}