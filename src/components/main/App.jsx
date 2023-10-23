import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
// import Navbar from './Navbar';
import Footer from "./Footer/Footer";
import Home from "../LandingPage/Home/Home"
import Login from "../LoginPage/Login";
import SignUp from "../LoginPage/Signup";
import Manager from "../Dashboards/manager/Manager";
import Employee from "../Dashboards/employee/Employee";
// import Dashboard from "./Dashboard";

function App(){
    return(
        <Router>
            {/* <Navbar />   */}

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/signup" exact element={<SignUp />} />
                <Route path="/employee" exact element={<Employee />} />
                <Route path="/manager" exact element={<Manager />} />
            </Routes>

            <Footer />
        </Router>
    )
}

export default App;