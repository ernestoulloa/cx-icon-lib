import { TestBed } from '@angular/core/testing';

import { CxIconRegistryService } from './cx-icon-registry.service';

describe('CxIconRegistryService', () => {
  let service: CxIconRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CxIconRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
