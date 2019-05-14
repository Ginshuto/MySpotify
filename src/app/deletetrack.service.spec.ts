import { TestBed } from '@angular/core/testing';

import { DeletetrackService } from './deletetrack.service';

describe('DeletetrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletetrackService = TestBed.get(DeletetrackService);
    expect(service).toBeTruthy();
  });
});
