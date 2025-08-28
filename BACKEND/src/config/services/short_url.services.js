import { generateNanoId } from "../utils/helper.js";
import urlSchema from '../models/short_url_model.js';

export const  createShortUrlWithoutUser =  async (url) => {
//generatenanoid id from *utils helper.js
  const shortUrl =await generateNanoId(7);
await saveShortUrl(shortUrl, url);
   return shortUrl;
  };

  export const  createShortUrlWithUser =  async (url, userId) => {
//generatenanoid id from *utils helper.js
  const shortUrl =await generateNanoId(7);
await saveShortUrl(shortUrl, url, userId);
   return shortUrl;
  };