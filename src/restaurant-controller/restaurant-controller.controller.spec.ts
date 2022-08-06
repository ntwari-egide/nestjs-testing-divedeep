import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantServiceService } from '../restaurant-service/restaurant-service.service';
import { RestaurantControllerController } from './restaurant-controller.controller';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
import { request } from 'http';
import { ModuleRef } from '@nestjs/core';

const moduleMocker = new ModuleMocker(global);

describe('RestaurantControllerController', () => {
  let controller: RestaurantControllerController;
  let service: RestaurantServiceService;

  beforeEach(async() => {
    const result = [
      {
        id: 1,
        name: 'Restaurant 1',
        address: 'Address 1',
        phone: '123456789',
    }
    ]

    const moduleRef = await Test.createTestingModule({
      controllers: [RestaurantControllerController],
      providers: [RestaurantServiceService]
    })
    .useMocker((token)=> {
      if(token == RestaurantServiceService) {
        return {getAll: jest.fn().mockResolvedValue(result), getRestaurantById: jest.fn().mockResolvedValue(result)}
      }
      if( typeof token === 'function') {
        const mockMetadata = moduleMocker.getMetadata(token) as MockFunctionMetadata<any, any>;
        const Mock = moduleMocker.generateFromMetadata(mockMetadata);
        return new Mock()
      }
    })
    .compile()


    service = moduleRef.get(RestaurantServiceService);
    controller = moduleRef.get(RestaurantControllerController);
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

      expect( await controller.getRestaurant(1)).toBe(result)
      // expect(controller.getRestaurant(2)).toHaveBeenCalled()
    })
   })
});
