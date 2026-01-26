import { Component, inject } from '@angular/core';
import { PeopleService } from '../services/people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  imports: [],
  templateUrl: './people.html',
  styleUrl: './people.scss',
})
export class People {
  peopleService = inject(PeopleService);
  router = inject(Router);

  people = this.peopleService.getPeople();

  more(id: number) {
    console.log({ id });
    this.router.navigate(['people/' + id]);
  }
}
