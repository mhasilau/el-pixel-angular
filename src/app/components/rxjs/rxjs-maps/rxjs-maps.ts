import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../../services/people';
import { concatMap, delay, switchMap, tap, Subject, fromEvent, mergeMap, exhaustMap } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rxjs-maps',
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './rxjs-maps.html',
  styleUrl: './rxjs-maps.scss',
})
export class RxjsMaps implements OnInit {
  currId$ = new Subject<number>();
  loading = false;
  form: FormGroup;

  constructor(
    private peopleService: PeopleService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      food: ['', Validators.minLength(5)],
      comment: [''],
    });
  }
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
          const randomDelay = Math.floor(Math.random() * 5000);
          console.log('delay: ', randomDelay);
          return this.peopleService.getPersonById(id).pipe(delay(randomDelay));
        }),
      )
      .subscribe((data) => {
        this.loading = false;
        // this.peopleService
        //   .getPersonById(data)
        //   .pipe(delay(2000))
        //   .subscribe((data) => {
        //     console.log(data);
        //   });
        console.log(data);
      });
  }

  generateId() {
    const id = Math.floor(Math.random() * 10) + 1;
    console.log('id: ', id);

    this.currId$.next(id);
  }
}
