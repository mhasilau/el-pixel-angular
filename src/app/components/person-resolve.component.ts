import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-resolve',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Person Resolve Example</h2>
    <div *ngIf="data">
      <p>ID: {{ data['userId'] }}</p>
      <p>Name: {{ data['name'] }}</p>
    </div>
  `,
})
export class PersonResolveComponent {
  data: any = null;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((d) => {
      this.data = d['data'];
    });
  }
}
