import '../Styles/Navbar.css';
import {NavLink, useNavigate} from "react-router-dom";
import {decodeToken} from "../Hooks/TokenHook.jsx";




export function Navbar() {
    const local_token = localStorage.getItem("token");
    const decoded_token = decodeToken(local_token);
    const navigate = useNavigate();





    const role = decoded_token?.role;



    function handleLogout() {
        localStorage.removeItem('token')
        navigate('/')
    }


    return (
        <nav className="navbar">
            {role === "Manager" && (
                <>
                    <NavLink
                        to="/jobs"
                        className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Jobs
                    </NavLink>

                    <NavLink
                        to="/create-models"
                        className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Create a Model
                    </NavLink>

                    <NavLink
                        to="/create-managers"
                        className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Create a Manager
                    </NavLink>
                </>
            )}

            {role === "Model" && (
                <>
                    <NavLink
                        to="/my-jobs"
                        className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                    >
                        My Jobs
                    </NavLink>
                </>
            )}

            {local_token && (
                <NavLink
                    onClick={handleLogout}
                    to="/"
                    className={({isActive}) => isActive ? "nav-link-logOut active" : "nav-link-logOut"}
                >
                    Logout
                </NavLink>
            )}
        </nav>
    );
}

export default Navbar;
