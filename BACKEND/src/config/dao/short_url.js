import urlSchema from '../models/short_url_model.js';
export  const saveShortUrl = async (shortUrl, longUrl,userId) => {
  const newUrl = new urlSchema({
    full_url: longUrl,
    short_url: shortUrl,
  });
  if(userId){
    newUrl.userId = userId;
  }
  await newUrl.save();
};

export const getShortUrl = async (shortUrl) => {
  return await urlSchema.findOne({ short_url: shortUrl });
};
