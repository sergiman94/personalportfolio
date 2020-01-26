import { TestBed } from '@angular/core/testing';

import { PortfolioServerService } from './portfolio-server.service';

describe('PortfolioServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortfolioServerService = TestBed.get(PortfolioServerService);
    expect(service).toBeTruthy();
  });
});
