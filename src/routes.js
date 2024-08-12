import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Adm from "./Pages/Adm/Adm";
import Home from "./Pages/Home/Home";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Login/> } /> 
            <Route path="/register" element={ <Register/> } /> 
            <Route path="/adm-area" element={ <Adm/> } /> 
            <Route path="/home" element={ <Home/> } /> 
        </Routes>
    );
}