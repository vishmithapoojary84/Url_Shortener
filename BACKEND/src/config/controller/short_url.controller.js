import { getShortUrl } from '../dao/short_url.js';  // 1 level up, dao folder
import { createShortUrlWithoutUser, createShortUrlWithUser } from '../services/short_url.services.js';  // 1 level up, services folder
import wrapAsync from '../utils/trycatchrwrapper.js';  // 1 level up, utils folder

export const createShortUrl = wrapAsync(async (req,res)=>{
    const data = req.body
    let shortUrl
    if(req.user){
        shortUrl = await createShortUrlWithUser(data.url,req.user._id,data.slug)
    }else{  
        shortUrl = await createShortUrlWithoutUser(data.url)
    }
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})


export const redirectFromShortUrl = wrapAsync(async (req,res)=>{
    const {id} = req.params
    const url = await getShortUrl(id)
    if(!url) throw new Error("Short URL not found")
    res.redirect(url.full_url)
})

export const createCustomShortUrl = wrapAsync(async (req,res)=>{
    const {url,slug} = req.body
    const shortUrl = await createShortUrlWithoutUser(url, slug)
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})