import { TestBed } from '@angular/core/testing';

import { PositionUtilService } from './position-util.service';

describe('PositionUtilService', () => {
  let service: PositionUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
