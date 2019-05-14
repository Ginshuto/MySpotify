import { TestBed } from '@angular/core/testing';

import { AddplaylistService } from './addplaylist.service';

describe('AddplaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddplaylistService = TestBed.get(AddplaylistService);
    expect(service).toBeTruthy();
  });
});
