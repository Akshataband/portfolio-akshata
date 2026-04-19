import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ProjectCategory = 'all' | 'fullstack' | 'backend';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  selectedFilter: ProjectCategory = 'all';

  readonly featuredProject = {
    title: 'Password Manager',
    label: 'Featured Build',
    summary:
      'A secure full stack password manager redesigned from a monolith into microservices with JWT-protected access, encrypted vault storage, and service-to-service API communication.',
    role: 'Full Stack Java Developer',
    impact: 'Designed the Angular client, secure Spring Boot services, and the migration path toward a more scalable architecture.',
    stack: ['Angular', 'Spring Boot', 'JWT', 'AES Encryption', 'MySQL', 'Docker'],
    highlights: [
      { value: '3', label: 'Core services separated for auth, vault, and audit flows' },
      { value: 'JWT', label: 'Token-based session flow protecting every private route' },
      { value: 'AES', label: 'Encrypted credential storage before persistence' },
    ],
  };

  readonly architectureFlow = [
    {
      phase: 'Monolith',
      title: 'Single application foundation',
      description:
        'The first version bundled login, vault operations, and admin logic into one service for rapid prototyping.',
    },
    {
      phase: 'Gateway',
      title: 'Auth-first request entry',
      description:
        'JWT validation and route protection were isolated so every request could be screened before hitting business services.',
    },
    {
      phase: 'Microservices',
      title: 'Independent business domains',
      description:
        'Vault, user management, and audit responsibilities were separated to improve scaling, maintainability, and deployments.',
    },
  ];

  readonly jwtFlow = [
    'User logs in from Angular UI with validated credentials',
    'Auth service issues a signed JWT after successful verification',
    'Angular attaches the JWT to protected API requests',
    'Gateway and services validate the token before serving data',
  ];

  readonly apiFlow = [
    {
      title: 'Angular Client',
      description: 'Handles forms, dashboard state, and secure request dispatching.',
    },
    {
      title: 'Auth API',
      description: 'Verifies users, creates JWT tokens, and manages access control.',
    },
    {
      title: 'Vault API',
      description: 'Encrypts and stores password records while returning masked payloads.',
    },
    {
      title: 'Audit API',
      description: 'Captures events like logins, vault updates, and suspicious access attempts.',
    },
  ];

  readonly projects = [
    {
      title: 'Password Manager',
      category: 'fullstack' as const,
      description:
        'Secure password manager with JWT, AES encryption, and microservices architecture.',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
      highlight: true,
    },
    {
      title: 'Aarogya Meals',
      category: 'fullstack' as const,
      description: 'Food delivery system with healthy meal tracking.',
      tech: ['Angular', 'Spring Boot'],
      highlight: false,
    },
    {
      title: 'Employee Management',
      category: 'backend' as const,
      description: 'REST API for managing employees.',
      tech: ['Spring Boot', 'MySQL'],
      highlight: false,
    },
  ];

  setFilter(filter: ProjectCategory): void {
    this.selectedFilter = filter;
  }

  get filteredProjects() {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) => project.category === this.selectedFilter);
  }
}
