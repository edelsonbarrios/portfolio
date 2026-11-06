import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { projects } from '../../data/projects';
import { StatusLabelComponent } from '../../shared/status-label/status-label.component';
import { TagChipComponent } from '../../shared/tag-chip/tag-chip.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, StatusLabelComponent, TagChipComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug'))),
    { initialValue: this.route.snapshot.paramMap.get('slug') },
  );

  protected readonly project = computed(() =>
    projects.find((p) => p.slug === this.slug()),
  );
}