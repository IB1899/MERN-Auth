import { createContext, useReducer, useEffect } from "react";

export let AuthContext = createContext();

//TODO The dispatch function with two cases to update the global state
let AuthReducer = (state, action) => {

    switch (action.type) {

        case "LOGIN": return { user: action.payload }

        case "LOGOUT": return { user: null }

        default: return state
    }
}

//* When we change the global state this function will re render
let AuthContextProvider = (props) => {

    /**
    *! After we logIn || signUp 
    *!  1- we send the backend data , that we get from the response , to local storage.
    *!  2- we update the global state to the backend data , that we get from the response.
    
    *? In the initial render 
    *?  1- we check the local storage if it has the data that we sent to it after logging in.
    *?  2- we check the local storage expiry that we create when we create item to the storage.
    *?  3- if we have the data in the local storage (we run this function only once )to update the global state
    *?     update the state to tell react that er are logged in or not.
    */
    useEffect(() => {
        let userString = localStorage.getItem("user");

        let now = new Date();

        //? If we have the data in local storage & not expired, update the global state 
        if (userString) {

            //* Convert the json object into js object
            let user = JSON.parse(userString);

            //? Compare the expiry time of the user with the current time
            if (user.expiry < now.getTime()) {

                //? If the user is expired, delete the user from storage
                localStorage.removeItem("user");
            }
            else { //? If user is not expired update the global state
                dispatch({ type: "LOGIN", payload: user });
            }
        }

    }, [])

    //TODO The global state, which is null by default
    let [state, dispatch] = useReducer(AuthReducer, { user: null });

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;