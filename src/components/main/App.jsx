import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Navbar from './Navbar';
import Footer from "./Footer";
<<<<<<< HEAD:src/components/main/App.jsx
import Home from "./LandingPage/Home";
import Login from "../LoginPage/Login";
=======
import Home from "./LandingPage/Home/Home";
import Login from "./LoginPage/Login";
>>>>>>> f345c4da23f041e3855d16901a8f69d36a091e44:src/components/App.jsx
// import Dashboard from "./Dashboard";

function App(){
    return(
        <Router>
            {/* <Navbar />   */}

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" exact element={<Login />} />
                {/* <Route path="/dashboard" exact element={<Dashboard />} /> */}
            </Routes>

            <Footer />
        </Router>
    )
}

export default App;