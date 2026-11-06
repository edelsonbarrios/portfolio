import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly profile = profile;
}