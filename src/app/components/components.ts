import { ChangeDetectorRef, Component, inject, Inject, Input, Optional } from '@angular/core';

@Component({
  selector: 'app-components',
  imports: [],
  templateUrl: './components.html',
  styleUrl: './components.scss',
  providers: [],
})
export class Components {
  constructor(
    @Inject(URL) private url: string,
    private cdr: ChangeDetectorRef,
  ) {}

  sdsada = inject(URL);

  obj = {
    name: 'John',
    age: 30,
  };

  f() {
    const a = {
      ...this.obj,
      age: 31,
    };

    this.obj = {
      ...a,
    };

    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }
}
