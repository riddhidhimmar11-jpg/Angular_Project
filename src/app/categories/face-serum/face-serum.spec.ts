import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSerum } from './face-serum';

describe('FaceSerum', () => {
  let component: FaceSerum;
  let fixture: ComponentFixture<FaceSerum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSerum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSerum);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
