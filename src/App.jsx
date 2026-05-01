import './App.css';
import Navbar from "./Components/Navbar.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import ControlledForm from "./Pages/Login.jsx";
import CreateManager from "./Pages/Managers/CreateManager.jsx";
import MyJobs from "./Pages/Models/MyJobs.jsx";
import CreateModel from "./Pages/Models/CreateModel.jsx";
import ManagerAllJobs from "./Pages/Managers/ManagerAllJobs.jsx";
import ModelJob from "./Pages/Models/MyJob.jsx";
import JobExpenses from "./Pages/Managers/ManagerExpensesJob.jsx";
import CreateJob from "./Pages/Managers/CreateJob.jsx";
import EditModelOnJob from "./Pages/Managers/EditModelOnJob.jsx";


export function App() {

  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<ControlledForm/>}></Route>

              <Route path="/jobs" element={<ManagerAllJobs/>}/>
              <Route path="/my-jobs" element={<MyJobs/>}/>
              <Route path="/create-models" element={<CreateModel/>}/>
              <Route path="/create-managers" element={<CreateManager/>}/>
              <Route path="/my-jobs/:jobId" element={<ModelJob/>}/>
              <Route path="/expenses/:jobId" element={<JobExpenses/>}/>
              <Route path="/createJob" element={<CreateJob/>}/>
              <Route path="/Edit/:modelId" element={<EditModelOnJob/>}/>


              <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
      </>
  )
}

export default App
