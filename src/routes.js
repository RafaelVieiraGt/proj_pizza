import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Adm from "./Pages/Adm/Adm";
import Home from "./Pages/Home/Home";
import ChatBot from "./Pages/ChatBot/ChatBot";
import Private from "./private";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Login/> } /> 
            <Route path="/register" element={ <Register/> } /> 
            <Route path="/adm-area" element={ <Private><Adm/></Private> } /> 
            <Route path="/chat-bot" element={ <Private><ChatBot/></Private> } />
            <Route path="/home" element={ <Private><Home/></Private> } /> 
        </Routes>
    );
}