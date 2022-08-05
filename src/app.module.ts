import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantControllerController } from './restaurant-controller/restaurant-controller.controller';
import { RestaurantServiceService } from './restaurant-service/restaurant-service.service';

@Module({
  imports: [],
  controllers: [AppController, RestaurantControllerController],
  providers: [AppService, RestaurantServiceService],
})
export class AppModule {}
