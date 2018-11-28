import { TestBed } from '@angular/core/testing';

import { InvitationCardService } from './invitation-card.service';

describe('InvitationCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvitationCardService = TestBed.get(InvitationCardService);
    expect(service).toBeTruthy();
  });
});
