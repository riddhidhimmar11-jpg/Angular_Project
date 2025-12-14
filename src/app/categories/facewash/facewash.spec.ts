import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Facewash } from './facewash';

describe('Facewash', () => {
  let component: Facewash;
  let fixture: ComponentFixture<Facewash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Facewash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Facewash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
