import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcousticPianosComponent } from './acoustic-pianos.component';

describe('AcousticPianosComponent', () => {
  let component: AcousticPianosComponent;
  let fixture: ComponentFixture<AcousticPianosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcousticPianosComponent]
    });
    fixture = TestBed.createComponent(AcousticPianosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
