import { Controller, Get, HttpStatus, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { RestaurantServiceService } from 'src/restaurant-service/restaurant-service.service';
import { Restaurant } from 'src/types';
import { RestourantSchema } from './pipes/restaurant.schema';
import { JoiValidationPipe } from './pipes/restaurant.validate';

@Controller('api/v1/restaurant-controller')
export class RestaurantControllerController {

    // to define the types we use interface

    // define the list of restaurants

    constructor( readonly restaurantService : RestaurantServiceService ) {}


    @Post()
    // @UsePipes(new JoiValidationPipe(RestourantSchema))
    saveNewRestaurant(restaurant: Restaurant) : Restaurant {
        return this.restaurantService.createRestaurant(restaurant);
    }

    @Get()
    getAllRestaurant( ): Restaurant[] {
       return this.restaurantService.getAll()
    }

    @Get("/:id")
    getRestaurant(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: Number) : Restaurant[]{
        return this.restaurantService.getRestaurantById(id);
    }
}
