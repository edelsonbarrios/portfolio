import { RenderMode, ServerRoute } from '@angular/ssr';
import { projects } from './data/projects';

export const serverRoutes: ServerRoute[] = [
  {
    // One prerendered page per project, using the slugs in projects.ts
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      projects.map((project) => ({ slug: project.slug })),
  },
  {
    // Everything else (home page and the 404 page)
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];