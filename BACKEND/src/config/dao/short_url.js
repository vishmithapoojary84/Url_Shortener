import urlSchema from '../models/short_url_model.js';
import { ConflictError, duplicateError } from '../utils/ErorrHandler.js';
// export  const saveShortUrl = async (shortUrl, longUrl,userId) => {
//   try{
//     const newUrl = new urlSchema({
//       full_url: longUrl,
//       short_url: shortUrl,
//     });
//     if(userId){
//       newUrl.userId = userId;
//     }
//     await newUrl.save();
//   }catch(error){
//     throw new Error('Failed to save short URL');
//   }
// };

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    const newUrl = new urlSchema({
      full_url: longUrl,
      short_url: shortUrl,
    });
    if (userId) {
      newUrl.userId = userId;
    }
    await newUrl.save();
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      throw new ConflictError("short URL already exists");
    }
    throw new Error(error);
  }
};

export const getShortUrl = async (shortUrl) => {
  return await urlSchema.findOneAndUpdate({ short_url: shortUrl },{$inc:{clicks:1}}).exec();
};
