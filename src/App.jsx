import './App.css';
import Navbar from "./Components/Navbar.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import ControlledForm from "./Pages/Login.jsx";
import CreateManager from "./Pages/Managers/CreateManager.jsx";
import MyJobs from "./Pages/Models/MyJobs.jsx";
import CreateModel from "./Pages/Models/CreateModel.jsx";
import ModelJob from "./Pages/Models/MyJob.jsx";


export function App() {

  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<ControlledForm/>}></Route>

              <Route path="/jobs" element={<CreateManager/>}/>
              <Route path="/my-jobs" element={<MyJobs/>}/>
              <Route path="/create-models" element={<CreateModel/>}/>
              <Route path="/create-managers" element={<CreateManager/>}/>
              <Route path="/my-jobs/:jobId" element={<ModelJob/>}/>

              <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
      </>
  )
}

export default App
