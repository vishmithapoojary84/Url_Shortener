import connectDB from './src/config/mongo.config.js';  // exact folder + file with .js
import short_url from './src/config/routes/short_url.route.js';  // with .js
import user_routes from './src/config/routes/user.routes.js';  // with .js
import auth_routes from './src/config/routes/auth.routes.js';  // with .js
import { redirectFromShortUrl } from './src/config/controller/short_url.controller.js';  // with .js
import { errorHandler } from './src/config/utils/ErorrHandler.js';  // with .js
import cors from 'cors';  // npm package - no path change
import { attachUser } from './src/config/utils/attachuser.js';  // with .js
import cookieParser from 'cookie-parser';  // npm package - no path change
import express from 'express';  // npm package - no path change
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // your React app
    credentials: true // 👈 this allows cookies to be sent
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(attachUser)

app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.use("/api/create",short_url)
app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)

app.listen(3000,()=>{
    connectDB()
    console.log("Server is running on http://localhost:3000");
})

// GET - Redirection 