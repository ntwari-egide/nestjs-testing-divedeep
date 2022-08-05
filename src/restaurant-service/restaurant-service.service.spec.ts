import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantServiceService } from './restaurant-service.service';

describe('RestaurantServiceService', () => {
  let service: RestaurantServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantServiceService],
    }).compile();

    service = module.get<RestaurantServiceService>(RestaurantServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
