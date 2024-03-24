import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Footer from "./footer/Footer";
import Home from "../LandingPage/Home/Home"
import Login from "../LoginPage/Login";
import SignUp from "../LoginPage/Signup";
import Dashboard from "../Dashboards/Dashboard";

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/logout" exact element={<Login />} />
                <Route path="/signup" exact element={<SignUp />} />
                <Route path="/dashboard/:userType" exact element={<Dashboard />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;