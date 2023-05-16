import React from "react";
import { NavLink,Link } from "react-router-dom";
import '../../Landingpage/index.css'
import img1 from '../../assets/img1.png'
const Team = () => {
  return (
    <>
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
              <NavLink to="/workflow">Workflow</NavLink>
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
   
    </>
  );
};

export default Team;
