import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  readonly certifications = [
    {
      title: 'Java Full Stack Development',
      subtitle: 'Training Focus',
      description:
        'Hands-on learning across frontend, backend, database integration, and production-ready Java application structure.',
    },
    {
      title: 'Spring Security & Microservices',
      subtitle: 'Architecture Focus',
      description:
        'Applied authentication, encryption workflows, secure APIs, and distributed service design in portfolio projects.',
    },
    {
      title: 'AWS & Docker Foundations',
      subtitle: 'Deployment Focus',
      description:
        'Focused on containerized delivery, cloud deployment readiness, and scalable application workflows.',
    },
  ];
}
