import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Face } from './face';

describe('Face', () => {
  let component: Face;
  let fixture: ComponentFixture<Face>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Face]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Face);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
