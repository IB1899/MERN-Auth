
import jwt from "jsonwebtoken";
import {AuthModel} from "../model/AuthModel.js"

let protectRoutes = (req , res , next)=>{

    let token = req.cookies.jwt;

    if(token){

        jwt.verify(token , "The secret" , async (err , decoded)=>{

            if(err){
                res.json({error:"The token is not valid"});
            }
            else{
                let id = decoded.id;
                let user = await AuthModel.findOne({ _id:id });
                
                res.json({success:user})
            }
        })
    }
    else{
        res.json({error:"There is no token"})
    }

}
export {protectRoutes};