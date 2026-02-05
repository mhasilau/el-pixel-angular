import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../../services/people';
import { concatMap, delay, switchMap, tap, Subject, fromEvent, mergeMap, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-maps',
  imports: [],
  templateUrl: './rxjs-maps.html',
  styleUrl: './rxjs-maps.scss',
})
export class RxjsMaps implements OnInit {
  currId$ = new Subject<number>();
  loading = false;
  constructor(private peopleService: PeopleService) {}
  ngOnInit(): void {
    this.currId$
      .pipe(
        tap(() => {
          this.loading = true;
        }),
        // switchMap((id) => {
        // concatMap((id) => {
        // mergeMap((id) => {
        exhaustMap((id) => {
          return this.peopleService.getPersonById(id).pipe(delay(2000));
        }),
      )
      .subscribe((data) => {
        this.loading = false;
        console.log(data);
      });
  }

  generateId() {
    const id = Math.floor(Math.random() * 10) + 1;
    console.log('id: ', id);

    this.currId$.next(id);
  }
}
