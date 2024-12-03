const express = require("express");
require("dotenv").config();
const connectDB = require("./src/utils/db_mongo");
const routers = require("./src/api/routers/routers"); 
connectDB();



const server = express();
server.use(express.json());




const PORT = process.env.PORT;

server.use("/api", routers); 

server.listen (PORT, () =>{
    console.log(`Server running port http://localhost:${PORT}`);
});
