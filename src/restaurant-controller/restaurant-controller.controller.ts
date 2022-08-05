import { Controller, Get, Param, Post } from '@nestjs/common';
import { RestaurantServiceService } from 'src/restaurant-service/restaurant-service.service';
import { Restaurant } from 'src/types';

@Controller('api/v1/restaurant-controller')
export class RestaurantControllerController {

    // to define the types we use interface

    // define the list of restaurants

    constructor( readonly restaurantService : RestaurantServiceService ) {}


    @Post()
    saveNewRestaurant(restaurant: Restaurant) : Restaurant {
        return this.restaurantService.createRestaurant(restaurant);
    }

    @Get()
    getAllRestaurant( ): Restaurant[] {
       return this.restaurantService.getAll()
    }

    @Get("/:id")
    getRestaurant(@Param('id') id: Number) : Restaurant[]{
        return this.restaurantService.getRestaurantById(id);
    }
}
