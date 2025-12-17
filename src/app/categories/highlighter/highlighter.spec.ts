import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Highlighter } from './highlighter';

describe('Highlighter', () => {
  let component: Highlighter;
  let fixture: ComponentFixture<Highlighter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Highlighter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Highlighter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
