import React from "react";
import { NavLink, Outlet } from "react-router";
import Aboutnav from "./Aboutnav";

function About() {
  return (
    <div className="flex flex-col items-center">
      <Aboutnav/>
      <Outlet />
    </div>
  );
}

export default About;
