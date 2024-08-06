import { TestBed } from '@angular/core/testing';

import { BilanService } from './bilan.service';
import { beforeEach, describe, it } from 'node:test';

describe('BilanService', () => {
  let service: BilanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
