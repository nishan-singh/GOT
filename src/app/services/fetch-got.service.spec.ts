import { TestBed } from '@angular/core/testing';

import { FetchGOTService } from './fetch-got.service';

describe('FetchGOTService', () => {
  let service: FetchGOTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchGOTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
