import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  selectedFilter = 'all';

  projects = [
    {
      title: 'Password Manager',
      category: 'fullstack',
      description:
        'Secure password manager with JWT, AES encryption, and microservices architecture.',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
      highlight: true,
    },
    {
      title: 'Aarogya Meals',
      category: 'fullstack',
      description: 'Food delivery system with healthy meal tracking.',
      tech: ['Angular', 'Spring Boot'],
      highlight: false,
    },
    {
      title: 'Employee Management',
      category: 'backend',
      description: 'REST API for managing employees.',
      tech: ['Spring Boot', 'MySQL'],
      highlight: false,
    },
  ];

  get filteredProjects() {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }

    return this.projects.filter((project) => project.category === this.selectedFilter);
  }
}
