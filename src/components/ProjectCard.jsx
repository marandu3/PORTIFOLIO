import React from "react";

function ProjectCard(props) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center mt-4 w-[85%] h-72 bg-gradient-to-b from-blue-500 to-purple-700 rounded-lg">
          <div className="bg-slate-200 w-[94%] h-[50%] rounded-md mt-3 ">
            {/* image for the project*/}
            <img src={props.img} className="w-[100%] h-[100%]"></img>
          </div>
          <div className="h-[33%] text-white text-justify ml-2 mr-2 mb-2">
            {/* description of the project*/}
            {props.description}
          </div>
          <button onClick={()=>window.open(props.goto)} className="bg-blue-800 text-white shadow-lg p-1 rounded-md">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
