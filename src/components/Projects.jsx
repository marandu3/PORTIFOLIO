import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import AdminControls from "./AdminControls";
import { FaTimes } from "react-icons/fa";

function Projects() {
  const { darkMode } = useTheme();
  const { isAdmin } = useAuth();
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('portfolio-projects');
    return savedProjects ? JSON.parse(savedProjects) : [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website built with React and Tailwind CSS, featuring dark mode and modern UI components.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        githubLink: "https://github.com/username/portfolio",
        liveLink: "https://portfolio.example.com"
      }
    ];
  });
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    img: "",
    technologies: "",
    githubLink: "",
    liveLink: ""
  });
  
  useEffect(() => {
    localStorage.setItem('portfolio-projects', JSON.stringify(projects));
  }, [projects]);
  
  const toggleForm = () => setIsFormOpen(!isFormOpen);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new project with parsed technologies
    const techArray = newProject.technologies
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech !== "");
    
    const projectToAdd = {
      id: Date.now(),
      ...newProject,
      technologies: techArray,
      img: newProject.img || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    };
    
    setProjects([...projects, projectToAdd]);
    
    // Reset form
    setNewProject({
      title: "",
      description: "",
      img: "",
      technologies: "",
      githubLink: "",
      liveLink: ""
    });
    
    setIsFormOpen(false);
  };
  
  const deleteProject = (id) => {
    if (!isAdmin) return;
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-200' : 'bg-light-100'} transition-colors duration-300 py-8 px-4`}>
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
            My Projects
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-light-300' : 'text-gray-600'}`}>
            Showcase of my latest work and ongoing projects. Click on any project to see more details.
          </p>
        </div>
        
        <AdminControls 
          onAdd={toggleForm} 
          showAddForm={isFormOpen} 
          itemType="Project"
        />
        
        {isFormOpen && isAdmin && (
          <div className={`mb-12 p-6 rounded-xl ${darkMode ? 'bg-dark-100' : 'bg-white'} shadow-lg`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
                Add New Project
              </h3>
              <button onClick={toggleForm} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="title"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Project Title*
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={newProject.title}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Enter project title"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="img"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Image URL
                  </label>
                  <input
                    id="img"
                    name="img"
                    type="text"
                    value={newProject.img}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Enter image URL (or leave empty for default)"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label 
                    htmlFor="description"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Description*
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={newProject.description}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Describe your project"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label 
                    htmlFor="technologies"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Technologies (comma separated)
                  </label>
                  <input
                    id="technologies"
                    name="technologies"
                    type="text"
                    value={newProject.technologies}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="React, Tailwind CSS, JavaScript, etc."
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="githubLink"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    GitHub Link
                  </label>
                  <input
                    id="githubLink"
                    name="githubLink"
                    type="url"
                    value={newProject.githubLink}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="https://github.com/username/project"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="liveLink"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Live Demo Link
                  </label>
                  <input
                    id="liveLink"
                    name="liveLink"
                    type="url"
                    value={newProject.liveLink}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="https://yourproject.com"
                  />
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={toggleForm}
                  className={`px-4 py-2 mr-2 rounded-md ${darkMode ? 'text-light-100 bg-dark-300' : 'text-gray-700 bg-gray-200'} hover:bg-opacity-80`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-6 py-2 rounded-md ${
                    darkMode 
                      ? 'bg-gradient-to-r from-primary-700 to-secondary-700 text-white hover:from-primary-600 hover:to-secondary-600' 
                      : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-400 hover:to-secondary-400'
                  }`}
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <ProjectCard
                title={project.title}
                description={project.description}
                img={project.img}
                technologies={project.technologies}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
              {isAdmin && (
                <button 
                  onClick={() => deleteProject(project.id)}
                  className={`absolute top-2 right-2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                    darkMode ? 'bg-red-900/80 text-white hover:bg-red-800' : 'bg-red-500/80 text-white hover:bg-red-600'
                  }`}
                >
                  <FaTimes size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
