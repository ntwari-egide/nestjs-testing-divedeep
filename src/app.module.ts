import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantControllerController } from './restaurant-controller/restaurant-controller.controller';
import { restaurantLogger } from './restaurant-controller/restaurant.fun.middleware';
import { RestourantLoggerMiddleware } from './restaurant-controller/restourant.logger';
import { RestaurantServiceService } from './restaurant-service/restaurant-service.service';

@Module({
  imports: [],
  controllers: [AppController, RestaurantControllerController],
  providers: [AppService, RestaurantServiceService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RestourantLoggerMiddleware, restaurantLogger)
      // .forRoutes('/api/v1/restaurant-controller')
      // .forRoutes({ path: '/api/v1/restaurant-controller', method: RequestMethod.POST})
      .forRoutes(RestaurantControllerController)
  }
}
