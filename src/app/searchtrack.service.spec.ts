import { TestBed } from '@angular/core/testing';

import { SearchtrackService } from './searchtrack.service';

describe('SearchtrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchtrackService = TestBed.get(SearchtrackService);
    expect(service).toBeTruthy();
  });
});
