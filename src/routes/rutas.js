import { Router } from "express";
import { tours } from "../controllers/tours.js";
import { createUser, login, changePreference, getPreference } from "../controllers/users.js";
import { counterTours, methodRecommend } from "../controllers/recommendations.js";

const routerTours=Router();
routerTours.get('/recommendations',methodRecommend);
routerTours.get('/tours',tours);
routerTours.post('/users', createUser);
routerTours.post('/login', login);
routerTours.patch('/counter', counterTours);
routerTours.patch('/updatepreference', changePreference);
routerTours.get('/getpreference',  getPreference);
export default routerTours;