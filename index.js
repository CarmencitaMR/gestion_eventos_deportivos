const express = require("express");
require("dotenv").config();
const connectDB = require("./src/utils/db_mongo");
const routers = require("./src/api/routers/routers"); 
const cloudinary = require("cloudinary").v2;
connectDB();


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY ,
    api_secret: process.env.CLOUD_API_SECRET
});





const server = express();
server.use(express.json());




const PORT = process.env.PORT;

server.use("/api", routers); 

server.listen (PORT, () =>{
    console.log(`Server running port http://localhost:${PORT}`);
});
