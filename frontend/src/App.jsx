import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

//! Pages
import Navbar from './pages/Navbar.jsx';
import Home from './pages/Home.jsx';
import Reducer from './pages/reducer.jsx';
import SignUp from "./pages/Auth/SignUp.jsx";
import LogIn from "./pages/Auth/LogIn.jsx";

//! AuthContext
import { AuthContext } from "./contexts/AuthContexts.jsx";

let App = () => {

    console.log("The app has ran");

    //* Using the global Auth state to protect routs
    let { state } = useContext(AuthContext);


    return (
        <Router>
            <div className="App">

                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/reducer" element={state.user ? <Reducer /> : <Navigate to={"log-in"} />} />

                    <Route path="sign-up" element={!state.user ? <SignUp /> : <Navigate to={"/"} />} />

                    <Route path="log-in" element={!state.user ? <LogIn /> : <Navigate to={"/"} />} />

                </Routes>

            </div>
        </Router>
    );
}
export default App;


