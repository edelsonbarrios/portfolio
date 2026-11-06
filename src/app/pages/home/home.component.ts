import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import { ProjectRowComponent } from '../../shared/project-row/project-row.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectRowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly profile = profile;
  protected readonly projects = projects;
}