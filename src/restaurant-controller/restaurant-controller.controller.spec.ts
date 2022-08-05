import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantServiceService } from '../restaurant-service/restaurant-service.service';
import { RestaurantControllerController } from './restaurant-controller.controller';

describe('RestaurantControllerController', () => {
  let controller: RestaurantControllerController;
  let service: RestaurantServiceService;

  beforeEach(async() => {

    const moduleRef = await Test.createTestingModule({
      controllers: [RestaurantControllerController],
      providers: [RestaurantServiceService]
    }).compile()


    service = moduleRef.get<RestaurantServiceService>(RestaurantServiceService);
    controller = moduleRef.get<RestaurantControllerController>(RestaurantControllerController);
  })

  describe('findAll', () => { 
    it('should return all restaurants stored', async () => {
      const result = [
        {
          id: 1,
          name: 'Restaurant 1',
          address: 'Address 1',
          phone: '123456789',
      }
      ]

      jest.spyOn(service, 'getAll').mockImplementation(() => result);

      expect(await controller.getAllRestaurant()).toBe(result)
    })

    it('should return one restaurant stored', async () => {
      const result = [
        {
          id: 1,
          name: 'Restaurant 1',
          address: 'Address 1',
          phone: '123456789',
      }]

      jest.spyOn(service, 'getRestaurantById').mockImplementation(() => result)

      expect( await controller.getRestaurant(2)).toBe(result)
      // expect(controller.getRestaurant(2)).toHaveBeenCalled()
    })
   })
});
