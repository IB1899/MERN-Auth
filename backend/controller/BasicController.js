
import {Router} from "express";

let BasicRoutes = Router();

BasicRoutes.get("/" , (req , res)=>{

    res.json({worked:"true"})
})

export default BasicRoutes;