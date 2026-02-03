import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTwo } from './rxjs-two';

describe('RxjsTwo', () => {
  let component: RxjsTwo;
  let fixture: ComponentFixture<RxjsTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
