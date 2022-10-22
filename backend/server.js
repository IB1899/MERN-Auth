//! Packages
import express from "express";
import cookieParser from "cookie-parser";

//! Controller
import BasicRoutes from "./controller/BasicController.js";
import AuthRoutes from "./controller/AuthController.js"; 

//TODO Creating express app
let server = express();

//TODO Compile json => JS object
server.use(express.json())

//TODO Middleware for dealing with cookies
server.use(cookieParser());

//TODO Listening to requests after we connect to mongodb
import {Do} from "./model/AuthModel.js";

Do(()=>{
    //* Listening for requests
    server.listen(3001 , ()=>{
        console.log(`We'r listening for requests on 3001`);
    });
})


//? Basic Routes
server.use(BasicRoutes);

//? Authentication Routes
server.use(AuthRoutes);


/**
 ** When importing a js file to the main js file , we will have all its commands run in our original file
 ** , but if we don`t import the properties{var , func ...} we can`t use them in our original js fils.
*/