import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMaps } from './rxjs-maps';

describe('RxjsMaps', () => {
  let component: RxjsMaps;
  let fixture: ComponentFixture<RxjsMaps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsMaps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsMaps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
