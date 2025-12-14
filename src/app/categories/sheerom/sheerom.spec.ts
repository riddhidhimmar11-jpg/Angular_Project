import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sheerom } from './sheerom';

describe('Sheerom', () => {
  let component: Sheerom;
  let fixture: ComponentFixture<Sheerom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sheerom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sheerom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
