import { Router } from "express";
import { tours } from "../controllers/tours.js";

 const routerTours=Router();

 routerTours.get('/tours',tours);
 routerTours.get('/recommendation',tours);

 export default routerTours;