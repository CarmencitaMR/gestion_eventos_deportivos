const express = require("express");
require("dotenv").config();
const connectDB = require("./src/utils/db_mongo");
connectDB();



const server = express();
server.use(express.json);




const PORT = process.env.PORT;

server.listen (PORT, () =>{
    console.log(`Server running port http://localhost:${PORT}`);
});
