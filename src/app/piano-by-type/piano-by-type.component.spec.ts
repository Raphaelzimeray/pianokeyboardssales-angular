import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoByTypeComponent } from './piano-by-type.component';

describe('PianoByTypeComponent', () => {
  let component: PianoByTypeComponent;
  let fixture: ComponentFixture<PianoByTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PianoByTypeComponent]
    });
    fixture = TestBed.createComponent(PianoByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
