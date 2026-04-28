import './App.css'
import {Routes, Route, Navigate} from "react-router-dom";
import CreateManager from "./pages/Managers/CreateManager.jsx"
import CreateModel from "./pages/Models/CreateModel.jsx"
import ControlledForm from "./pages/Login.jsx"


export function App() {

  return (
    <>
    <Routes >
        <Route path="/" element={<ControlledForm/>}></Route>

        <Route path="/jobs" element={<CreateManager/>} />
        <Route path="/my-jobs" element={<CreateModel/>} />


        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  )
}

export default App
