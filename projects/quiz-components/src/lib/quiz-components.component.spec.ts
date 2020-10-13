import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponentsComponent } from './quiz-components.component';

describe('QuizComponentsComponent', () => {
  let component: QuizComponentsComponent;
  let fixture: ComponentFixture<QuizComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
