import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-chip',
  standalone: true,
  templateUrl: './tag-chip.component.html',
  styleUrl: './tag-chip.component.scss',
})
export class TagChipComponent {
  readonly label = input.required<string>();
}