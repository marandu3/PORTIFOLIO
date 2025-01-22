import React from "react";
import { NavLink, Outlet } from "react-router";
import Aboutnav from "./Aboutnav";
import Footerpages from "./Footerpages";

function About() {
  return (
    <div>
      <div className="flex flex-col">
      <Aboutnav/>
      <Outlet />
    </div>
    <Footerpages/>
    </div>
    
  );
}

export default About;
 