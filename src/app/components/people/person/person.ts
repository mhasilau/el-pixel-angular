import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../../services/people';
import { CommonModule } from '@angular/common';
import { filter, map, tap } from 'rxjs';
import { PersonPipe } from './person-pipe';

interface IPerson {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-person',
  imports: [CommonModule, PersonPipe],
  templateUrl: './person.html',
  styleUrl: './person.scss',
})
export class Person implements OnInit {
  router = inject(Router);
  peopleService = inject(PeopleService);
  route = inject(ActivatedRoute);

  person: IPerson | null = null;
  today = new Date();

  ngOnInit(): void {
    // const id = Number(this.router.url.split('/').pop());
    const id = Number(this.route.snapshot.params['id']);
    // Получение state через history.state (работает всегда после навигации)
    console.log('History state:', history.state);

    console.log(this.route.snapshot.params);

    this.peopleService
      .getPersonById(id)
      .pipe(
        tap((person) => console.log('TAP data:', person)),
        map((person) => {
          return {
            ...person,
            gettingAt: new Date(),
          };
        }),
        // filter((person) => person.aaa),
        tap((person) => console.log('TAP data end:', person)),
      )
      .subscribe((person) => {
        console.log({ person });

        this.person = person;
      });

    // this.peopleService.deletePersonById(id).subscribe((data) => {
    //   console.log('Person data:', data);
    // });
  }
}
