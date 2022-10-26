import { useState } from "react";
import useLogIn from "../../hooks/useLogIn";

const LogIn = () => {

    //TODO the data the user send 
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    //TODO logic from useSignUp hook
    let { Do, emailErr, passwordErr, success } = useLogIn();

    //! onSubmit fire this function
    let Post = async (e) => {
        e.preventDefault();

        //! The request logic
        Do(email, password);
    }

    return (
        <div className="LogIn">
            <h1> Log In Page </h1>

            <form onSubmit={Post}>

                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please enter your email" required />
                <label htmlFor="email"> Email </label>
                {emailErr && <span> {emailErr} </span>}

                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please enter your password" required />
                <label htmlFor="password"> Password </label>
                {passwordErr && <span> {passwordErr} </span>}

                <button> Sign Up </button>
                {success && <span style={{ color: "green", width: 300, translate: 0, marginTop: 20, textAlign: "center" }}> {success} </span>}

            </form>

        </div>
    );
}
export default LogIn;