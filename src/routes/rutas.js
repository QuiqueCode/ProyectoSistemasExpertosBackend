import { Router } from "express";
import { tours } from "../controllers/tours.js";
<<<<<<< HEAD
import { createUser, login, changePreference } from "../controllers/users.js";
import { methodRecommend } from "../controllers/recommendations.js";
=======
import { createUser, login } from "../controllers/users.js";
import { counterTours, methodRecommend } from "../controllers/recommendations.js";
>>>>>>> 5431168d550a9b699008250fe55605bf4d9ee4b9

const routerTours=Router();
routerTours.get('/recommendations',methodRecommend);
routerTours.get('/tours',tours);
routerTours.post('/users', createUser);
routerTours.post('/login', login);
<<<<<<< HEAD
routerTours.patch('/updatepreference', changePreference);
=======
routerTours.patch('/counter', counterTours);
>>>>>>> 5431168d550a9b699008250fe55605bf4d9ee4b9
export default routerTours;