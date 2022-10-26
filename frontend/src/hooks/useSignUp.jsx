import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts.jsx";

const useSignUp = () => {

    //TODO global state to be updated after loges in & save it to local storage
    let { dispatch } = useContext(AuthContext);

    //TODO Stats for the backend messages 
    let [emailErr, setEmailErr] = useState(undefined);
    let [passwordErr, setPasswordErr] = useState(undefined);
    let [success, setSuccess] = useState(undefined);

    //TODO get the time to make expiry for local storage items
    let now = new Date()

    let Do = async (email, password) => {
        try {
            let response = await fetch("/sign-up", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })

            let data = await response.json();

            if (response.ok) { //TODO execute this only if the response is true

                if (data.Errors) {
                    setEmailErr(data.Errors.email);
                    setPasswordErr(data.Errors.password);
                }
                else {
                    setEmailErr(undefined);
                    setPasswordErr(undefined);
                    setSuccess(data.success);

                    //! Saving the token that we get after signing up, in local storage. and expiry after 1 day from created time
                    localStorage.setItem("user", JSON.stringify({ email: data.email, token: data.token, expiry: now.getTime() + 1000 * 60 * 60 * 24 }));

                    //! Updating the AuthContext state , so we can know in react if user logged in or not
                    dispatch({ type: "LOGIN", payload: data });
                }
            }
        }
        catch (err) { console.log(err); }
    }
    return { Do, emailErr, passwordErr, success }
}
export default useSignUp;