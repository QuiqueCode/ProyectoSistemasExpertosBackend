import { Router } from "express";
import { tours } from "../controllers/tours.js";
import { createUser, login, changePreference } from "../controllers/users.js";
import { methodRecommend } from "../controllers/recommendations.js";

const routerTours=Router();
routerTours.get('/recommendations',methodRecommend);
routerTours.get('/tours',tours);
routerTours.post('/users', createUser);
routerTours.post('/login', login);
routerTours.patch('/updatepreference', changePreference);
export default routerTours;