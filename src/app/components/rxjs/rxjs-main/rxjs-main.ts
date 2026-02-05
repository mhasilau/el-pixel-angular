import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxjsOne } from '../rxjs-one/rxjs-one';
import { RxjsTwo } from '../rxjs-two/rxjs-two';
import { RxjsMaps } from '../rxjs-maps/rxjs-maps';

@Component({
  selector: 'app-rxjs-main',
  imports: [RxjsOne, RxjsTwo, RxjsMaps],
  templateUrl: './rxjs-main.html',
  styleUrl: './rxjs-main.scss',
})
export class RxjsMain implements OnInit, OnDestroy {
  sub$ = new Observable((observer) => {
    observer.next('next');
    observer.next('next 2');
    observer.next('next 3');
    // observer.error('error')
    observer.complete();
  });

  ngOnInit(): void {
    this.sub$.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
