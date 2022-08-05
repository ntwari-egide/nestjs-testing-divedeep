import { NextFunction } from "express";

export function restaurantLogger ( req: Request, res: Response, next: NextFunction) {
    console.log('Functional middleware logger is being called ....')

    next()
}