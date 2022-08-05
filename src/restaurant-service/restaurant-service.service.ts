import { Injectable } from '@nestjs/common';
import { Restaurant } from 'src/types';

@Injectable()
export class RestaurantServiceService {
    restaurants: Restaurant[] = [
        {
            id: 1,
            name: 'Restaurant 1',
            address: 'Address 1',
            phone: '123456789',
        },

        {
            id: 2,
            name: 'Restaurant 2',
            address: 'Address 2',
            phone: '123456789',
        }
    ];

    getAll() : Restaurant[] {
        return this.restaurants;
    }

    getRestaurantById( id: Number) : Restaurant[] {
        return this.restaurants.filter((e) => e.id == id );
    }

    createRestaurant( input : Restaurant) : Restaurant {
        this.restaurants.push(input);

        return input;
    }
}
