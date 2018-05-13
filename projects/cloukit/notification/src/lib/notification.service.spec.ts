import { TestBed, inject } from '@angular/core/testing';

import { CloukitNotificationService } from './notification.service';

describe('CloukitNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloukitNotificationService]
    });
  });

  it('should be created', inject([CloukitNotificationService], (service: CloukitNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
