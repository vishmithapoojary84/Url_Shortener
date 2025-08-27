import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import express from 'express';
import { nanoid } from 'nanoid';

import connectDB from "./src/config/mongo.config.js";

import urlSchema from './src/config/modals/shorturl_model.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

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


app.get('/:id', async (req, res) => {
 
    const {id} =  req.params;
    const url = await urlSchema.findOne({short_url: id});
if (url){
  res.redirect(url.full_url);
}
else{
  res.status(404).json("Not found");
}
});





async function startServer() {
  await connectDB();
  app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
  });
}

startServer();


