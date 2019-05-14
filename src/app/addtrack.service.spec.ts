import { TestBed } from '@angular/core/testing';

import { AddtrackService } from './addtrack.service';

describe('AddtrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtrackService = TestBed.get(AddtrackService);
    expect(service).toBeTruthy();
  });
});
