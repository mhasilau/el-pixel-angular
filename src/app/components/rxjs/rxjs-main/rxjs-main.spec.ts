import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMain } from './rxjs-main';

describe('RxjsMain', () => {
  let component: RxjsMain;
  let fixture: ComponentFixture<RxjsMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
