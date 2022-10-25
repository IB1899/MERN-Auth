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
    *?  1- we check the local storage if it has the data that we sent after logging in.
    *?  2- if we have the data in the local storage (we run this function only once )to update the global state
    */
    useEffect(() => {
        let user = localStorage.getItem("user");

        //? if we have the data in local storage update the global state 
        if (user) {
            dispatch({ type: "LOGIN", payload: JSON.parse(user) })
        }
    }, [])

    //TODO The global state, which is null by default
    let [state, dispatch] = useReducer(AuthReducer, { user: null });

    console.log(state);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )

}
export default AuthContextProvider;