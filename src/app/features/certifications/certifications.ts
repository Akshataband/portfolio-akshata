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
    title: 'Professional Full Stack Java Development',
    subtitle: 'JSpiders Training Center',
    description:
      'Completed professional training covering Core Java, J2EE, SQL, Web Technologies, Frameworks, React JS and Python. Built strong foundations in full-stack development and software engineering.',
    viewUrl: 'assets/certificates/jspiders-fullstack-java.jpg',
    downloadUrl: 'assets/certificates/jspiders-fullstack-java.jpg'
  },

  {
    title: 'Java Full Stack Training Program',
    subtitle: 'Revature Consultancy Services',
    description:
      'Successfully completed a 13-week Java Full Stack training program focused on enterprise application development, frontend and backend technologies, database integration and industry-standard development practices.',
    viewUrl: 'assets/certificates/revature-training-certificate.pdf',
    downloadUrl: 'assets/certificates/revature-training-certificate.pdf'
  }
];
}
