import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantControllerController } from './restaurant-controller.controller';

describe('RestaurantControllerController', () => {
  let controller: RestaurantControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantControllerController],
    }).compile();

    controller = module.get<RestaurantControllerController>(RestaurantControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
