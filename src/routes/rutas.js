import { Router } from "express";
import { tours } from "../controllers/tours.js";
import { recommendations } from "../controllers/recommendations.js";

 const routerTours=Router();

 routerTours.get('/tours',tours);
 routerTours.get('/recommendations',recommendations);

 export default routerTours;