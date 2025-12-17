import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lips } from './lips';

describe('Lips', () => {
  let component: Lips;
  let fixture: ComponentFixture<Lips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lips);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
