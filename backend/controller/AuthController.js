import { Router } from "express";
import { AuthModel } from "../model/AuthModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

let AuthRoutes = Router();


//! Create A user
AuthRoutes.post("/sign-up", async (req, res) => {

    try {

        let { email, password } = req.body;

        let result = await AuthModel.create({ email, password });
        
        //! Creating jwt
        let token = jwt.sign( {id:result.id} , "The secret" , { expiresIn: 60 * 60 * 24 });

        //! Creating and sending a cookie
        res.cookie( "jwt" , token , { httpOnly:true , maxAge: 1000 * 60 * 60 * 24 })

        res.json({ id:result.id , success:"A user has been created successfully" });

    } catch (err) {
        // console.log(err.errors.password.properties.message);

        let Errors = {}

        if (err.code === 11000) {
            Errors["email"] = "The email already exists"
        }
        else if (err.message.includes("user validation failed")) {

            Object.values(err.errors).forEach(one => {
                Errors[one.properties.path] = one.properties.message
            })
        }
        else {
            Errors["error"] = "There is an error"
            console.log(err);
        }
        res.json({Errors})
    }
})

//! Validate A user
AuthRoutes.post("/log-in", async (req, res) => {

    try {
        let { email, password } = req.body;

        let result = await AuthModel.findOne({ email });

        if(result){

            //! Here we compare the hash password in the document and the password the user entered
            let auth = await bcrypt.compare(password , result.password)

            if(auth){

                //! Creating a jwt
                let token = jwt.sign( {id:result.id} , "The secret" , {expiresIn: 60 * 60 * 24 } )
                
                //! Creating and sending a cookie
                res.cookie( "jwt" , token ,{ httpOnly:true , maxAge:1000 * 60 * 60 * 24 })
                
                res.json({ id:result.id , success:"You have successfully logged in" });
            }
            else{   
                throw Error("The password is not correct");
            }
        }
        else{
            throw Error("There is no such an email");
        }

    }catch (err) {
        res.json({Error:err.message})
    }
})

export default AuthRoutes;