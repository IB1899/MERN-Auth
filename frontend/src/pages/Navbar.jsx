import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import useLogOut from "../hooks/useLogOut";

const Navbar = () => {

    //! For navigation
    let navigate = useNavigate();

    //! The global Auth state , has value if logged in, null if not logged in
    let { state } = useContext(AuthContext);

    //! Log Out function in a hook
    let { LogOut } = useLogOut();

    return (
        <nav>
            <div className="logo"> MERN Auth </div>

            {state.user ? ( //TODO if we`r logged in, return this
                <ul>
                    <li> welcome {state.user.email} </li>

                    {/* onClick fire the LogOut function from useLogOut hook */}
                    <span onClick={LogOut} > Log Out </span>

                    <li onClick={() => navigate('/')} > Home </li>
                    <li onClick={() => navigate('/reducer')} > Reducer </li>
                </ul>
            ) : ( //TODO if we are`nt logged in, return this instead
                <ul>
                    <li onClick={() => navigate('/sign-up')} > Sign up </li>
                    <li onClick={() => navigate('/log-in')}  > Log in  </li>
                </ul>
            )}

        </nav>
    );
}

export default Navbar;