import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly skillGroups = [
    {
      title: 'Frontend',
      icon: 'fab fa-angular',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'RxJS', 'Bootstrap'],
    },
    {
      title: 'Backend',
      icon: 'fab fa-java',
      items: [
        'Java',
        'Spring Boot',
        'Spring MVC',
        'Spring Security',
        'Hibernate',
        'REST APIs',
        'Microservices',
        'Swagger / OpenAPI',
      ],
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      items: ['MySQL', 'SQL'],
    },
    {
      title: 'Tools',
      icon: 'fas fa-screwdriver-wrench',
      items: ['Git', 'Docker', 'AWS', 'Maven', 'IntelliJ', 'VS Code'],
    },
    {
      title: 'Testing',
      icon: 'fas fa-vial-circle-check',
      items: ['JUnit', 'Mockito', 'Postman'],
    },
  ];
}
