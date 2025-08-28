import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import express from 'express';

import short_url from './src/config/routes/short_url.route.js';
import connectDB from "./src/config/mongo.config.js";
import { redirectFromShortUrl } from './src/config/controller/short_url.controller.js';




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//in *routes short url routes.js
app.use('/api/create',short_url)


app.get('/:id', redirectFromShortUrl);





async function startServer() {
  await connectDB();
  app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
  });
}

startServer();


