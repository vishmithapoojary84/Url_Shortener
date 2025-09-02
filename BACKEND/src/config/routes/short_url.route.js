// 1 level up, dao folder
import { createShortUrl } from '../controller/short_url.controller.js';  // 1 level up, controller folder
import { authMiddleware } from '../middleware/auth.middleware.js';  // 1 level up, middleware folder
import express from 'express';
const router = express.Router();

//in *controller short url controller.js
router.post('/',authMiddleware, createShortUrl);

// router.post('/',authMiddleware, createShortUrlAuth);
export default router;
