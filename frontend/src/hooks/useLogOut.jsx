import { AuthContext } from "../contexts/AuthContexts.jsx";
import { useContext } from "react"

let useLogOut = () => {

    let { dispatch } = useContext(AuthContext);

    let LogOut = async () => {

        try {
            //? 1- First we make a request to the backend to delete the jwt
            let response = await fetch("/log-out");

            if (response.ok) {

                //? 2- Second we remove the user from the storage
                localStorage.removeItem("user");

                //? 3- Third we update the global state to be null instead off the user`s data 
                dispatch({ type: "LOGOUT" });
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return { LogOut }
}

export default useLogOut