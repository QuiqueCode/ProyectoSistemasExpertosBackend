import { Router } from "express";
import { tours } from "../controllers/tours.js";
import { createUser, login } from "../controllers/users.js";
const routerTours=Router();

routerTours.get('/tours',tours);
routerTours.post('/users', createUser);
routerTours.post('/login', login)
export default routerTours;