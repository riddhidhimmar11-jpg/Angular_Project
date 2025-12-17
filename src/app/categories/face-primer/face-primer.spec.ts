import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacePrimer } from './face-primer';

describe('FacePrimer', () => {
  let component: FacePrimer;
  let fixture: ComponentFixture<FacePrimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacePrimer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacePrimer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
