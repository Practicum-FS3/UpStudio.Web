import { TestBed } from '@angular/core/testing';

import { QuestionsAndAnswersService } from './questions-and-answers.service';

describe('QuestionsAndAnswersService', () => {
  let service: QuestionsAndAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsAndAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
