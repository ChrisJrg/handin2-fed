import '../Styles/Navbar.css';
import {NavLink} from "react-router-dom";



export function Navbar() {

    return (
        <>
            <nav className={"navbar"}>

                <NavLink
                    to={"/jobs"}
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Jobs
                </NavLink>

                <NavLink
                    to={"/my-jobs"}
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    My Jobs
                </NavLink>

                <NavLink
                    to={"/create-models"}
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Create a Model
                </NavLink>

                <NavLink
                    to={"/create-managers"}
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Create a Manager
                </NavLink>

                <NavLink
                    to={"/"}
                    className={({ isActive }) => isActive ? "nav-link-logOut active" : "nav-link-logOut"}
                >
                    Logout
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar;
