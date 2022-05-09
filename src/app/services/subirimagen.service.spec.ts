import { TestBed } from '@angular/core/testing';

import { SubirimagenService } from './subirimagen.service';

describe('SubirimagenService', () => {
  let service: SubirimagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirimagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
