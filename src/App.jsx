import './App.css'
import {Routes, Route, Navigate, NavLink} from "react-router-dom";
import CreateManager from "./pages/Managers/CreateManager.jsx"
import CreateModel from "./pages/Models/CreateModel.jsx"
import ControlledForm from "./pages/Login.jsx"
import MyJobs from "./pages/Models/MyJobs.jsx"


export function App() {

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
          <Routes>
              <Route path="/" element={<ControlledForm/>}></Route>

              <Route path="/jobs" element={<CreateManager/>}/>
              <Route path="/my-jobs" element={<MyJobs/>}/>
              <Route path="/create-models" element={<CreateModel/>}/>
              <Route path="/create-managers" element={<CreateManager/>}/>

              <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
      </>
  )
}

export default App
