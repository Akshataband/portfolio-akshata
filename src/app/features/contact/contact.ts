import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);

  readonly contactInfo = [
    {
      icon: '@',
      label: 'Email',
      value: 'bandakshata@gmail.com',
      href: 'mailto:bandakshata@gmail.com',
    },
    {
      icon: 'L',
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: 'https://maps.google.com/?q=Pune%2C%20Maharashtra%2C%20India',
    },
  ];

  readonly socialLinks = [
    {
      label: 'LinkedIn',
      handle: 'linkedin.com/in/akshataband',
      href: 'https://www.linkedin.com/in/akshataband/',
      icon: 'in',
    },
    {
      label: 'GitHub',
      handle: 'github.com/akshata-band',
      href: 'https://github.com/akshata-band',
      icon: 'GH',
    },
  ];

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(12)]],
  });

  submitAttempted = false;
  showSuccessMessage = false;

  get nameControl() {
    return this.contactForm.controls.name;
  }

  get emailControl() {
    return this.contactForm.controls.email;
  }

  get messageControl() {
    return this.contactForm.controls.message;
  }

  hasError(controlName: 'name' | 'email' | 'message', errorKey: string): boolean {
    const control = this.contactForm.controls[controlName];
    return control.hasError(errorKey) && (control.touched || control.dirty || this.submitAttempted);
  }

  onSubmit(): void {
    this.submitAttempted = true;
    this.showSuccessMessage = false;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.showSuccessMessage = true;
    this.contactForm.reset();
    this.submitAttempted = false;
  }
}
