import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../data/profile';
import { SeoService } from '../../shared/seo';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.set({
      title: `Page not found | ${profile.name}`,
      description: 'The page you are looking for does not exist or has moved.',
    });
  }
}