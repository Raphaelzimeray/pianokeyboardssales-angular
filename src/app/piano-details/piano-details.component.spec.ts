import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoDetailsComponent } from './piano-details.component';

describe('PianoDetailsComponent', () => {
  let component: PianoDetailsComponent;
  let fixture: ComponentFixture<PianoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PianoDetailsComponent]
    });
    fixture = TestBed.createComponent(PianoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
