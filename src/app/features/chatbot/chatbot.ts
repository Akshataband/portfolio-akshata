import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ChatRole = 'user' | 'bot';

type ChatMessage = {
  role: ChatRole;
  text: string;
};

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer?: ElementRef<HTMLDivElement>;

  isOpen = false;
  isTyping = false;
  messageInput = '';

  chatHistory: ChatMessage[] = [
    {
      role: 'bot',
      text: 'Hi, I am Akshata AI Assistant. You can ask me anything about Akshata, her profile, background, skills, projects, experience, or goals.',
    },
  ];

  private shouldScroll = false;

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    this.shouldScroll = this.isOpen;
  }

  closeChat(): void {
    this.isOpen = false;
  }

  sendMessage(): void {
    const trimmedMessage = this.messageInput.trim();

    if (!trimmedMessage || this.isTyping) {
      return;
    }

    this.chatHistory.push({
      role: 'user',
      text: trimmedMessage,
    });

    this.messageInput = '';
    this.isTyping = true;
    this.shouldScroll = true;

    window.setTimeout(() => {
      this.chatHistory.push({
        role: 'bot',
        text: this.getMockResponse(trimmedMessage),
      });
      this.isTyping = false;
      this.shouldScroll = true;
    }, 900);
  }

  handleEnter(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;

    if (keyboardEvent.key === 'Enter' && !keyboardEvent.shiftKey) {
      keyboardEvent.preventDefault();
      this.sendMessage();
    }
  }

  private getMockResponse(message: string): string {
    const normalized = message.toLowerCase();

    if (
      normalized.includes('summarize') ||
      normalized.includes('summary') ||
      normalized.includes('introduce') ||
      normalized.includes('yourself') ||
      normalized.includes('about you')
    ) {
      return 'Akshata Band is a Java Full Stack Developer with a background in engineering and a strong interest in building modern, reliable, and user-focused applications. She works across Angular, Spring Boot, backend systems, frontend interfaces, and secure software design.';
    }

    if (normalized.includes('skill')) {
      return 'Akshata works with Angular, TypeScript, Java, Spring Boot, Microservices, MySQL, Docker, AWS, Swagger/OpenAPI, JUnit, Mockito, and Postman.';
    }

    if (normalized.includes('project')) {
      return 'Her portfolio includes password manager projects built across microservices, full stack web, and console application approaches, along with frontend work like Aarogya Meals and Digitalization of College Campuss.';
    }

    if (normalized.includes('experience') || normalized.includes('journey') || normalized.includes('background')) {
      return 'Akshata comes from an engineering background and transitioned into Java Full Stack Development, building experience through practical projects in frontend development, backend systems, and secure application design.';
    }

    if (normalized.includes('contact') || normalized.includes('email') || normalized.includes('linkedin') || normalized.includes('github')) {
      return 'You can find Akshata’s email, LinkedIn, and GitHub details in the Contact section of the portfolio.';
    }

    if (normalized.includes('goal') || normalized.includes('future') || normalized.includes('career')) {
      return 'Akshata is focused on growing as a Java Full Stack Developer by building secure, scalable applications and strengthening her expertise across frontend development, backend architecture, and cloud-ready delivery.';
    }

    return 'I can answer general questions about Akshata Band, including her profile, strengths, background, skills, projects, experience, and career direction. Ask naturally, for example: summarize yourself, what are your strengths, what technologies do you work with, or what projects have you built?';
  }

  private scrollToBottom(): void {
    const container = this.messagesContainer?.nativeElement;

    if (!container) {
      return;
    }

    container.scrollTop = container.scrollHeight;
  }
}
