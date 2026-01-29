import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../../services/people';
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
  route = inject(ActivatedRoute);

  person: any = null;

  ngOnInit(): void {
    // const id = Number(this.router.url.split('/').pop());
    const id = Number(this.route.snapshot.params['id']);
    // Получение state через history.state (работает всегда после навигации)
    console.log('History state:', history.state);

    console.log(this.route.snapshot.params);

    this.peopleService.getPersonById(id).subscribe((data) => {
      this.person = data;
      console.log('Person data:', data);
    });

    // this.peopleService.deletePersonById(id).subscribe((data) => {
    //   console.log('Person data:', data);
    // });
  }
}
