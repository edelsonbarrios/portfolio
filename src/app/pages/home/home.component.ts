import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import { skills } from '../../data/skills';
import { ProjectRowComponent } from '../../shared/project-row/project-row.component';
import { SeoService } from '../../shared/seo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectRowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly seo = inject(SeoService);

  protected readonly profile = profile;
  protected readonly projects = projects;
  protected readonly skills = skills;

  constructor() {
    this.seo.set({
      title: `${profile.name} | ${profile.title}`,
      description: profile.description,
      path: '/',
    });
  }
}