import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../data/projects';
import { StatusLabelComponent } from '../status-label/status-label.component';
import { TagChipComponent } from '../tag-chip/tag-chip.component';

@Component({
  selector: 'app-project-row',
  standalone: true,
  imports: [RouterLink, StatusLabelComponent, TagChipComponent],
  templateUrl: './project-row.component.html',
  styleUrl: './project-row.component.scss',
})
export class ProjectRowComponent {
  readonly project = input.required<Project>();
}