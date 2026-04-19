import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly timeline = [
    {
      period: 'Foundation',
      title: 'Electrical Engineering Background',
      description:
        'Developed analytical thinking, structured troubleshooting habits, and disciplined problem solving through engineering studies.',
    },
    {
      period: 'Transition',
      title: 'Java Full Stack Learning Phase',
      description:
        'Focused on Java, Spring Boot, Angular, SQL, and backend architecture while building hands-on secure application projects.',
    },
    {
      period: 'Current',
      title: 'Java Full Stack Developer Journey',
      description:
        'Applying full stack development skills to password management systems, microservices design, authentication workflows, and cloud-oriented delivery.',
    },
  ];
}
