
import { useContext } from "react";
import { FirstContext } from "../contexts/FirstContexts";

//TODO A functional component
const Home = () => {


    //! Consuming contexts using useContext 

    let { name, setName, age, increaseAge, reduceAge } = useContext(FirstContext);

    return (
        <div className="Home"  >


            <h1> {name} {age} </h1>
            <button onClick={() => { setName("Mike") }}>change name</button>

            <button onClick={increaseAge}>+</button>
            <button onClick={reduceAge}>-</button>
        
        </div>
    );
}
export default Home;

