import { Component, inject, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  imports: [],
  templateUrl: './people.html',
  styleUrl: './people.scss',
})
export class People implements OnInit {
  peopleService = inject(PeopleService);
  router = inject(Router);

  people: any[] = [];

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((data) => {
      this.people = data;
      console.log(data);
    });
  }

  more(id: number) {
    console.log({ id });
    this.router.navigate(['people/' + id], {
      state: {
        from: 'people',
        timestamp: Date.now(),
        data: {
          name: 'mikhail',
        },
      },
      queryParams: {
        limit: 20,
        skip: 10,
      },
    });
  }
}
