import { useState } from "react";

const LogIn = () => {
    
    let [email , setEmail] = useState("");
    let [password , setPassword] = useState("");
    
    //TODO Stats for the backend messages 
    let [emailErr , setEmailErr] = useState(undefined);
    let [passwordErr , setPasswordErr] = useState(undefined);

    let [ success , setSuccess] = useState(undefined);

    let Post = async (e)=>{
        e.preventDefault();

        let response = await fetch("/log-in" , {
            method:"POST" , headers:{"Content-Type":"application/json"},
            body: JSON.stringify({email , password})
        });

        let data = await response.json();

        if(data.Error){

            if(data.Error.includes("The password is not correct")){
                setPasswordErr(data.Error);
                setEmailErr(undefined)
            }
            else{
                setEmailErr(data.Error);
                setPasswordErr(undefined)
            }
        }
        else{
            setEmailErr(undefined);
            setPasswordErr(undefined);
            setEmail("");
            setPassword("")
            setSuccess(data.success);
        }

    }

    return (
        <div className="LogIn">

            <h1> Log In Page </h1>

            <form onSubmit={Post}>

                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value) } placeholder="Please enter your email" required />
                <label htmlFor="email"> Email </label>
                {emailErr && <span> {emailErr} </span> }

                <input type="text" value={password} onChange={(e)=> setPassword(e.target.value) } placeholder="Please enter your password" required />
                <label htmlFor="password"> Password </label>
                {passwordErr && <span> {passwordErr} </span> }

                <button> Sign Up </button>
                {success && <span style={{color:"green", width:300, translate:0, marginTop:20 , textAlign:"center"}}> {success} </span> }

            </form>

        </div>
    );
}
 
export default LogIn;