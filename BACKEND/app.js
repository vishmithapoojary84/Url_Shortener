import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import express from 'express';
import { nanoid } from 'nanoid';

import connectDB from "./src/config/mongo.config.js";

import urlSchema from './src/config/modals/shorturl_model.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/create',  (req, res) => {

    const { url } = req.body;
    const shortUrl = nanoid(7);
    const newUrl = new urlSchema({
      full_url: url,
      short_url: shortUrl,
    });
     newUrl.save();
    res.send(nanoid(7));
  });

// Optional GET route for redirect
// app.get('/:shortId', async (req, res) => {
//   try {
//     const url = await ShortUrl.findOne({ short_url: req.params.shortId });
//     if (!url) return res.status(404).json({ error: 'URL not found' });
//     url.clicks++;
//     await url.save();
//     res.redirect(url.full_url);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


  app.listen(3000, () => {
    connectDB()
    console.log('Server listening on http://localhost:3000');
  });


