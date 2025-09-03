import urlSchema from "../models/short_url_model.js";
import { ConflictError } from "../utils/ErorrHandler.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    // Prepare data object for new document
    const data = {
      full_url: longUrl,
      short_url: shortUrl,
      clicks: 0,
    };

    // Add user field only if userId is provided
    if (userId) {
      data.user = userId;
    }

    // Create new document with all data
    const newUrl = new urlSchema(data);

    // Save document to MongoDB
    await newUrl.save();
  } catch (err) {
    // Handle duplicate short_url conflict error
    if (err.code === 11000) {
      throw new ConflictError("Short URL already exists");
    }
    // Throw other errors as normal
    throw new Error(err);
  }
};

export const getShortUrl = async (shortUrl) => {
  return await urlSchema.findOneAndUpdate({ short_url: shortUrl }, { $inc: { clicks: 1 } });
};

export const getCustomShortUrl = async (slug) => {
  return await urlSchema.findOne({ short_url: slug });
};
