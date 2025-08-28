import { generateNanoId } from "../utils/helper.js";
import urlSchema from '../models/short_url_model.js';
import { saveShortUrl } from "../dao/short_url.js";

export const  createShortUrlWithoutUser =  async (url) => {


  //generatenanoid id from *utils helper.js
  const shortUrl =await generateNanoId(7);
  if(!shortUrl) throw new Error('Failed to generate short URL');

await saveShortUrl("iU6f9N7",url);

   return shortUrl;
  };

  export const  createShortUrlWithUser =  async (url, userId) => {
//generatenanoid id from *utils helper.js
  const shortUrl =await generateNanoId(7);
await saveShortUrl(shortUrl, url, userId);
   return shortUrl;
  };

