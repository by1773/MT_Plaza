import { TestBed, inject } from '@angular/core/testing';

import { HttpTokenService } from './http-token.service';

describe('HttpTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpTokenService]
    });
  });

  it('should be created', inject([HttpTokenService], (service: HttpTokenService) => {
    expect(service).toBeTruthy();
  }));
});
