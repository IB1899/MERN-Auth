import { useNavigate } from "react-router-dom";



const Navbar = () => {

  let navigate = useNavigate();

  return (
    <nav>
      <div className="logo">Hooks</div>

      <ul>
        <li onClick={() => navigate('/')} > Home </li>
        <li onClick={() => navigate('/reducer')} > Reducer </li>
        <li onClick={() => navigate('/sign-up')} > Sign up </li>
        <li onClick={() => navigate('/log-in')}  > Log in  </li>
      </ul>

    </nav>
  );
}

export default Navbar;