import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly role = 'Java Full Stack Developer';

  readonly summary =
    'I am a Full Stack Developer with strong problem-solving skills and experience building secure, scalable applications using Angular, Spring Boot, and Microservices architecture. I specialize in authentication systems, encryption, and cloud-based deployments.';

  readonly highlights = [
    {
      title: 'Secure application design',
      description: 'Focused on authentication, encryption flows, and reliable access control.',
    },
    {
      title: 'Scalable backend thinking',
      description: 'Comfortable with Spring Boot services, REST APIs, and microservices patterns.',
    },
    {
      title: 'Cloud-ready delivery',
      description: 'Experienced building projects with Docker-first workflows and AWS deployment goals.',
    },
  ];

  readonly journey = [
    {
      title: 'Electrical Engineering Foundation',
      description: 'Built analytical thinking and structured problem solving through engineering studies.',
    },
    {
      title: 'Transition into Software Development',
      description: 'Moved into IT with a strong focus on Java, Angular, backend architecture, and clean code.',
    },
    {
      title: 'Java Full Stack Developer',
      description: 'Now building secure full stack applications with Angular, Spring Boot, MySQL, and microservices.',
    },
  ];
}
