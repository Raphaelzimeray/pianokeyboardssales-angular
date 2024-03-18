import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoCardComponent } from './piano-card.component';

describe('PianoCardComponent', () => {
  let component: PianoCardComponent;
  let fixture: ComponentFixture<PianoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PianoCardComponent]
    });
    fixture = TestBed.createComponent(PianoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
