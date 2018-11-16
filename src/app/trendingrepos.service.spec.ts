import { TestBed } from '@angular/core/testing';

import { TrendingreposService } from './trendingrepos.service';

describe('TrendingreposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendingreposService = TestBed.get(TrendingreposService);
    expect(service).toBeTruthy();
  });
});
