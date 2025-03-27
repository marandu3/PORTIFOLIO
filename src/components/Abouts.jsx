import React from "react";
import { NavLink, Outlet } from "react-router";
import Aboutnav from "./Aboutnav";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div className="flex flex-col">
        <Aboutnav/>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default About;
 