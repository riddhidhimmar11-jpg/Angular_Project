import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairStyling } from './hair-styling';

describe('HairStyling', () => {
  let component: HairStyling;
  let fixture: ComponentFixture<HairStyling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairStyling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairStyling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
