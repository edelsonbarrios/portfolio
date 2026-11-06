import { Component, input } from '@angular/core';
import { ProjectStatus } from '../../data/projects';

@Component({
  selector: 'app-status-label',
  standalone: true,
  templateUrl: './status-label.component.html',
  styleUrl: './status-label.component.scss',
})
export class StatusLabelComponent {
  readonly status = input.required<ProjectStatus>();
  readonly label = input.required<string>();
}