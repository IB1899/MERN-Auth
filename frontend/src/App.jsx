import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//! Pages
import Navbar from './pages/Navbar.jsx';
import Home from './pages/Home.jsx';
import Reducer from './pages/reducer.jsx'
import SignUp from "./pages/Auth/SignUp.jsx";
import LogIn from "./pages/Auth/LogIn.jsx"

//! ContextProvider
import FirstContextProvider from "./contexts/FirstContexts.jsx";

let App = () => {

  let [a] = useState("true");

  
  return (
    <Router>
      <div className="App">

        <Navbar />


        <FirstContextProvider>
          <Routes>
            <Route path="/" element={<Home a={a} />} />
            <Route path="/reducer" element={<Reducer a={a} />} />
            <Route path="sign-up" element={ <SignUp /> } />
            <Route path="log-in" element={ <LogIn /> } />

          </Routes>
        </FirstContextProvider>

      </div>
    </Router>
  );
}
export default App;


