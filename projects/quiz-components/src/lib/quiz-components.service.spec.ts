import { TestBed } from '@angular/core/testing';

import { QuizComponentsService } from './quiz-components.service';

describe('QuizComponentsService', () => {
  let service: QuizComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
