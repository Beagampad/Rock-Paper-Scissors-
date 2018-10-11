import { TestBed, inject } from '@angular/core/testing';

import { RemoteplayerService } from './remoteplayer.service';

describe('RemoteplayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteplayerService]
    });
  });

  it('should be created', inject([RemoteplayerService], (service: RemoteplayerService) => {
    expect(service).toBeTruthy();
  }));
});
