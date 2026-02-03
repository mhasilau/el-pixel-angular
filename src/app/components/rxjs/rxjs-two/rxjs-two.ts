import { Component, inject, OnInit } from '@angular/core';
import { Rxjs } from '../rxjs';
import { from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-two',
  imports: [],
  templateUrl: './rxjs-two.html',
  styleUrl: './rxjs-two.scss',
})
export class RxjsTwo implements OnInit {
  rxjsService = inject(Rxjs);

  of$ = of(1, 2, 3, 4, 5, 6);
  from$ = from(['a', 'b', 'c', 'd']);

  fromEvent$ = fromEvent(document, 'click');
  ngOnInit(): void {
    this.fromEvent$.subscribe(() => console.log('click'));
  }

  clickOf() {
    this.of$.subscribe((data) => {
      console.log(data);
    });
  }

  clickFrom() {
    this.from$.subscribe((data) => {
      console.log(data);
    });
  }
}
