import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../../services/people';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  imports: [CommonModule],
  templateUrl: './person.html',
  styleUrl: './person.scss',
})
export class Person implements OnInit {
  router = inject(Router);
  peopleService = inject(PeopleService);

  person: any = null;

  ngOnInit(): void {
    const id = Number(this.router.url.split('/').pop());
    console.log(this.router.url);

    this.person = this.peopleService.getPersonById(id);
  }
}
