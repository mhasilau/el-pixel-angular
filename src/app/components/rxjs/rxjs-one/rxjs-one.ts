import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-one',
  imports: [CommonModule],
  templateUrl: './rxjs-one.html',
  styleUrl: './rxjs-one.scss',
})
export class RxjsOne implements OnInit {
  ngOnInit(): void {
    this.sub$.subscribe((data) => {
      console.log(data);
      this.result = data;
    });
  }
  result = 0;
  sub$ = new Subject<number>();
  bSub$ = new BehaviorSubject<number>(0);

  implementSub() {
    this.sub$.next(++this.result);
  }

  implementBSub() {
    let value = this.bSub$.value;
    this.bSub$.next(++value);
  }
}
