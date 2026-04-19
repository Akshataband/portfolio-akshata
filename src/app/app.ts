import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';

import { About } from './features/about/about';
import { Chatbot } from './features/chatbot/chatbot';
import { Certifications } from './features/certifications/certifications';
import { Contact } from './features/contact/contact';
import { Experience } from './features/experience/experience';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Certifications,
    Contact,
    Chatbot,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });
      window.requestAnimationFrame(() => AOS.refreshHard());
      window.addEventListener('load', () => AOS.refreshHard(), { once: true });
    }
  }
}
