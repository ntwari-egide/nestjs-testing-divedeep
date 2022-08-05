import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantControllerController } from './restaurant-controller/restaurant-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, RestaurantControllerController],
  providers: [AppService],
})
export class AppModule {}
