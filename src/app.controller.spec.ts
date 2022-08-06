import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantServiceService } from './restaurant-service/restaurant-service.service';
import * as request from 'supertest';

describe('AppController', () => {
  let appController: INestApplication;
  let restaurantService = { getAll: () => ['test']}

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: []
    })
    .overrideProvider(RestaurantServiceService)
    .useValue(restaurantService)
    .compile()

    appController = moduleRef.createNestApplication();
    await appController.init()
  })


  describe('root', () => {
    it('/GET all restaurants"', () => {
      return request(appController.getHttpServer())
        .get('/api/v1/restaurant-controller')
        .expect(200)
        .expect({
          data: restaurantService.getAll()
        })
    });
  });

  afterAll( async () => {
    await appController.close()
  })
});
