import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {

    //TODO the data the user send 
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    //TODO logic from useSignUp hook
    let { Do, emailErr, passwordErr, success } = useSignUp();

    //! onSubmit fire this function
    let Post = (e) => {
        e.preventDefault();

        //! The request logic
        Do(email, password);
    }

    return (
        <div className="SignUp">
            <h1> Sign Up Page </h1>

            <form onSubmit={Post}>

                <input type="email" value={email} placeholder="Please enter your email" required onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email"> Email </label>
                {emailErr && <span> {emailErr} </span>}

                <input type="text" value={password} placeholder="Please enter your password" required onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="password"> Password </label>
                {passwordErr && <span> {passwordErr} </span>}

                <button> Sign Up </button>
                {success && <span style={{ color: "green", width: 300, translate: 0, marginTop: 20, textAlign: "center" }}> {success} </span>}

            </form>

        </div>
    );
}
export default SignUp;