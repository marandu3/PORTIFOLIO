import React from "react";
import ProjCard from "../components/ProjectCard"
import gmail from "../assets/gmail.png"

function Projects() {
  return (
    <div className="md:grid md:grid-cols-3">
        <ProjCard description="mm ni marandu john wa chuo kikuu cha dar es salaam" img={gmail}/>
        

    </div>
  );
}

export default Projects;
