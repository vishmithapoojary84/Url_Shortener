import express from 'express';
import {register_user, login_user } from '../controller/auth.controller.js';

const router = express.Router();
//register and login is in *controller auth.controller.js
router.post('/register', register_user);
router.post('/login', login_user);

export default router;
