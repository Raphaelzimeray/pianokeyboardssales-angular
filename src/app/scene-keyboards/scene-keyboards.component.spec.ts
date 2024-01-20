import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneKeyboardsComponent } from './scene-keyboards.component';

describe('SceneKeyboardsComponent', () => {
  let component: SceneKeyboardsComponent;
  let fixture: ComponentFixture<SceneKeyboardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SceneKeyboardsComponent]
    });
    fixture = TestBed.createComponent(SceneKeyboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
