import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOne } from './rxjs-one';

describe('RxjsOne', () => {
  let component: RxjsOne;
  let fixture: ComponentFixture<RxjsOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
