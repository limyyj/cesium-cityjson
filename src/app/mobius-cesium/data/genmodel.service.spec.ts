import { TestBed, inject } from '@angular/core/testing';

import { GenModelService } from './genmodel.service';

describe('GenModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenModelService]
    });
  });

  it('should be created', inject([GenModelService], (service: GenModelService) => {
    expect(service).toBeTruthy();
  }));
});
