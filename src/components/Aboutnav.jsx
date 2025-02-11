import React from "react";
import { NavLink } from "react-router";

function Aboutnav() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center w-[95%] text-white text-lg md:text-xl bg-gradient-to-b from-blue-500 py-1 to-purple-700  rounded-lg justify-around">
        {/* EDUCATION NavLink */}
        <NavLink
          to="Abouts/Education"
          className={({ isActive }) =>
            `text-center px-3 py-1 ${
              isActive
                ? "bg-white text-blue-500 rounded-lg"
                : "hover:underline"
            }`
          }
        >
          EDUCATION
        </NavLink>

        {/* Vertical line between EDUCATION and SKILLS */}
        <div className="border-l-2 border-white h-6"></div>

        {/* SKILLS NavLink */}
        <NavLink
          to="Abouts/Skills"
          className={({ isActive }) =>
            `text-center px-3 py-1 ${
              isActive
                ? "bg-white text-blue-500 rounded-lg"
                : "hover:underline"
            }`
          }
        >
          SKILLS
        </NavLink>

        {/* Vertical line between SKILLS and TIMELINE */}
        <div className="border-l-2 border-white h-6"></div>

        {/* TIMELINE NavLink */}
        <NavLink
          to="Abouts/Timeline"
          className={({ isActive }) =>
            `text-center px-3 py-1 ${
              isActive
                ? "bg-white text-blue-500 rounded-lg"
                : "hover:underline"
            }`
          }
        >
          TIMELINE
        </NavLink>
      </div>
    </div>
  );
}

export default Aboutnav;
