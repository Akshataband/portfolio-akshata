import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ProjectCategory = 'all' | 'fullstack' | 'backend' | 'frontend';

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
    title: 'Microservices Password Manager',
    category: 'fullstack' as const,
    description:
      'Cloud-native password manager built using Spring Boot microservices architecture with secure authentication, AES encryption, 2FA, and real-time notifications.',
    tech: ['Spring Boot', 'Spring Cloud', 'Angular', 'Docker', 'AWS'],
    features: [
      'Microservices for User, Vault, Generator, and Notification domains',
      'API Gateway and Eureka-based service discovery',
      'OpenFeign communication between services',
      'Dockerized deployment for cloud-ready delivery',
    ],
  };

  readonly projects = [
    {
      title: 'Microservices Password Manager',
      category: 'fullstack' as const,
      description:
        'Cloud-native password manager built using Spring Boot microservices architecture with secure authentication, AES encryption, 2FA, and real-time notifications.',
      tech: ['Spring Boot', 'Spring Cloud', 'Angular', 'Docker', 'AWS'],
      features: [
        'Microservices (User, Vault, Generator, Notification)',
        'API Gateway + Eureka',
        'OpenFeign communication',
        'Dockerized deployment',
      ],
      highlight: true,
    },
    {
      title: 'Full Stack Password Manager',
      category: 'fullstack' as const,
      description:
        'Secure web application for storing and managing passwords with encryption and 2FA.',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      features: [
        'Authentication + security questions',
        'Password vault',
        'Google Authenticator (2FA)',
        'CI/CD using GitHub Actions',
      ],
      highlight: false,
    },
    {
      title: 'Console Password Manager',
      category: 'backend' as const,
      description:
        'Java-based console application implementing secure password storage using layered architecture.',
      tech: ['Java', 'JDBC', 'MySQL'],
      features: ['CRUD operations', 'AES encryption', 'JUnit testing'],
      highlight: false,
    },
    {
      title: 'Aarogya Meals',
      category: 'frontend' as const,
      description:
        'Responsive nutrition-focused web application that helps users explore healthy meals, dietary choices, and clean meal browsing experiences.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      features: [
        'Meal category browsing',
        'Nutrition-focused user flow',
        'Responsive frontend layout',
        'Clean landing and content pages',
      ],
      highlight: false,
    },
    {
      title: 'Digitalization of College Campuss',
      category: 'frontend' as const,
      description:
        'Frontend project designed to bring important college information and campus-facing interactions into a more accessible digital experience.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'College information sections',
        'Campus-focused web interface',
        'Responsive static frontend',
        'Clear content-based navigation',
      ],
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
