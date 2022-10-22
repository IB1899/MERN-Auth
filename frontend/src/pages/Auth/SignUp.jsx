import { useState } from "react";

const SignUp = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");


    //TODO Stats for the backend messages 
    let [emailErr , setEmailErr] = useState(undefined);
    let [passwordErr , setPasswordErr] = useState(undefined);

    let [ success , setSuccess] = useState(undefined);

    let Post = async (e) => {

        e.preventDefault();

        try {
            let response = await fetch("/sign-up", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })

            let data = await response.json();

            if(data.Errors){
                console.log(data.Errors);

                setEmailErr(data.Errors.email);
                setPasswordErr(data.Errors.password);
            }
            else{
                setEmail("");
                setPassword("");
                setEmailErr(undefined);
                setPasswordErr(undefined);
                setSuccess(data.success);
            }
        

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="SignUp">

            <h1> Sign Up Page </h1>

            <form onSubmit={Post}>

                <input type="email" value={email} placeholder="Please enter your email" required onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email"> Email </label>
                {emailErr && <span> {emailErr} </span> }

                <input type="text" value={password} placeholder="Please enter your password" required onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="password"> Password </label>
                {passwordErr && <span> {passwordErr} </span> }

                <button> Sign Up </button>
                {success && <span style={{color:"green", width:300, translate:0, marginTop:20 , textAlign:"center"}}> {success} </span> }

            </form>

        </div>
    );
}

export default SignUp;