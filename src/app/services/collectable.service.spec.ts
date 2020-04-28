import { TestBed } from '@angular/core/testing';

import { CollectableService } from './collectable.service';

describe('CollectableService', () => {
  let service: CollectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
