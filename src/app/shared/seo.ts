import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { profile } from '../data/profile';

// TODO: set this to the real site address after deploying (no slash at the end),
// for example 'https://your-site.vercel.app'. Until then, the og:url and
// og:image tags are skipped, because they need a full address.
const SITE_URL = '';

export interface SeoData {
  title: string;
  description: string;
  path?: string; // for example '/projects/budgetflow'; leave out on pages that should have no og:url
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);

  set(data: SeoData): void {
    this.titleService.setTitle(data.title);

    this.meta.updateTag({ name: 'description', content: data.description });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: profile.name });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });

    if (SITE_URL) {
      this.meta.updateTag({ property: 'og:image', content: `${SITE_URL}/og-image.png` });
      this.meta.updateTag({ name: 'twitter:image', content: `${SITE_URL}/og-image.png` });
      if (data.path !== undefined) {
        this.meta.updateTag({ property: 'og:url', content: `${SITE_URL}${data.path}` });
      }
    }
  }
}