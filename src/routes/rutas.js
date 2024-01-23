import { Router } from "express";
import { tours } from "../controllers/tours.js";
import { createUser, login } from "../controllers/users.js";
import { recommendations } from "../controllers/recommendations.js";
import { preference } from "../controllers/preference.js";

const routerTours=Router();
routerTours.get('/recommendations',recommendations);
routerTours.get('/preference',preference);
routerTours.get('/tours',tours);
routerTours.post('/users', createUser);
routerTours.post('/login', login);
export default routerTours;