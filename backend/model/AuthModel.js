import {Schema , model , connect} from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt"; 
import validator from "validator";


//! Auth Schema
let AuthSchema = new Schema({
    
    email:{
        type:String,
        required:[true , "Please enter an email"],
        unique:true,

        validate:[validator.isEmail , "Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true , "Please enter a password"],
        minlength:[8 , "The password must be more then 8 characters"]
    }

}, { timestamps: true });

//! Before creating the user hash the password
AuthSchema.pre("save" , async function(next){

    let salt = await bcrypt.genSalt();
    
    this.password = await bcrypt.hash(this.password , salt)

    next();
})


//! Auth model
export let AuthModel = model("mern-user", AuthSchema)

//! env file
dotenv.config();
//! Connecting to mongodb
export let Do = async (callback)=>{
    
    try{
        //* Connecting to mongodb
        let uri = process.env.uri;
        
        await connect(uri)
        console.log(`Connected to mongodb`);
        
        callback()

    }catch(err){
        console.log(err);
    }
}