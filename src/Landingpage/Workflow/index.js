import React from "react";
import { BrowserRouter as Router,Routes,Route,NavLink,Link } from "react-router-dom";
import '../../Landingpage/index.css'
import img1 from '../../assets/img1.png'
import Home from './Landingpage/Home/index'
// import About from './Landingpage/About/index'
import Workflow from './Landingpage/Workflow/index'
import Activities from './Landingpage/Activities/index'
import Team from './Landingpage/Team/index'
import step1 from "./step1";
// import Contact from './Landingpage/Contact/index'

const Workflow = () => {
  return (
    <Router>
      
      <header id="header" className="fixed-top">
        <div className="main">
          <h1 className="logo"><a><img src={img1}/></a></h1>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li className="nav-Link" id="#home">
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li className="nav-link" id="about">
              <NavLink to="/about">About</NavLink>
            </li> */}
            <li className="nav-link" id="workflow">
              <NavLink to="/Workflow">Workflow</NavLink>
            </li>
            <li className="nav-link" id="activities">
              <NavLink to="/activities">Activities</NavLink>
            </li>
            <li className="nav-link" id="#team">
              <NavLink to="/team">Team</NavLink>
            </li>
            {/* <li className="nav-link" id="contact">
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
            <li>
            <Link className="getstarted scrollto">Get Started</Link>
          </li>
          </ul>
        </nav>
      </header>
      <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      <Route path="/workflow" element={<Workflow/>}/>
      <Route path="/activities" element={<Activities/>}/>
      <Route path="/team" element={<Team/>}/>
      {/* <Route path="/contact" element={<Contact/>}/> */}
      <Route path="/Workflow/step1" element={<step1/>}/>
      </Routes>
    </Router>
  );
};

export default Workflow;
