import { TestBed, inject } from '@angular/core/testing';

import { CityJSONService } from './readCityJSON.service';

describe('GenModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityJSONService]
    });
  });

  it('should be created', inject([CityJSONService], (service: CityJSONService) => {
    expect(service).toBeTruthy();
  }));
});
