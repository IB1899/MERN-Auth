
import { useReducer } from "react";

const Reducer = () => {

    //! Reducer reduces the functions into one function, but that function has one state 

    let LogicAge = (state, action) => {

        if (action.type === "IncreaseNumber") { return state + 1 }

        else if (action.type === "ReduceNumber") { console.log("hi"); return state - 1 }

        else if (action.type === "IncreaseSomeNumber") { return state + action.number }
        else { return state }
    }

    let [total, dispatch] = useReducer(LogicAge, 0);

    
    return (
        <div className="Reducer">

            {total}

            <button onClick={() => dispatch({ type: "IncreaseNumber" })}> + </button>
            <button onClick={() => dispatch({ type: "ReduceNumber" })}>   - </button>

            {/* will increase by 5  */}
            <button onClick={() => dispatch({ type: "IncreaseSomeNumber", number: 5 })}> + 5 </button>

        </div>
    );
}
export default Reducer;


