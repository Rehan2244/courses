import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { Course } from './api-call.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be able to add and remove from cart', () => {
    service.addToCart({} as Course)
    service.removeFromCart({} as Course)
  });
  it('should be able to add and remove from wishlist', () => {
    service.addToWishlist({} as Course)
    service.removeFromWishlist({} as Course)
  });
});
