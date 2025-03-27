import React, { useState, useEffect } from 'react'
import Skillscard from './Skillscard'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import AdminControls from './AdminControls'
import { FaTimes } from 'react-icons/fa'

function Skills() {
  const { darkMode } = useTheme();
  const { isAdmin } = useAuth();
  
  const [skills, setSkills] = useState(() => {
    const savedSkills = localStorage.getItem('portfolio-skills');
    return savedSkills ? JSON.parse(savedSkills) : [
      {
        id: 1,
        skill: "React",
        percentage: 85,
        category: "Frontend",
        description: "Building modern user interfaces with React.js and related libraries"
      },
      {
        id: 2,
        skill: "JavaScript",
        percentage: 90,
        category: "Frontend",
        description: "Modern ES6+ JavaScript for web development"
      },
      {
        id: 3,
        skill: "Tailwind CSS",
        percentage: 80,
        category: "UI/UX",
        description: "Utility-first CSS framework for rapid UI development"
      },
      {
        id: 4,
        skill: "Node.js",
        percentage: 75,
        category: "Backend",
        description: "Server-side JavaScript for building scalable applications"
      },
      {
        id: 5,
        skill: "MongoDB",
        percentage: 70,
        category: "Backend",
        description: "NoSQL database for modern applications"
      },
      {
        id: 6,
        skill: "Responsive Design",
        percentage: 85,
        category: "UI/UX",
        description: "Creating websites that work on all devices and screen sizes"
      }
    ];
  });
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newSkill, setNewSkill] = useState({
    skill: "",
    percentage: 50,
    category: "",
    description: ""
  });
  
  useEffect(() => {
    localStorage.setItem('portfolio-skills', JSON.stringify(skills));
  }, [skills]);
  
  const toggleForm = () => setIsFormOpen(!isFormOpen);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSkill({
      ...newSkill,
      [name]: name === "percentage" ? parseInt(value) || 0 : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const skillToAdd = {
      id: Date.now(),
      ...newSkill,
      percentage: Math.min(Math.max(newSkill.percentage, 0), 100) // Ensure between 0-100
    };
    
    setSkills([...skills, skillToAdd]);
    
    // Reset form
    setNewSkill({
      skill: "",
      percentage: 50,
      category: "",
      description: ""
    });
    
    setIsFormOpen(false);
  };
  
  const deleteSkill = (id) => {
    if (!isAdmin) return;
    setSkills(skills.filter(skill => skill.id !== id));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-200' : 'bg-light-100'} transition-colors duration-300 py-8 px-4`}>
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
            My Skills
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-light-300' : 'text-gray-600'}`}>
            Technical skills and proficiencies I've developed throughout my career
          </p>
        </div>
        
        <AdminControls 
          onAdd={toggleForm} 
          showAddForm={isFormOpen} 
          itemType="Skill"
        />
        
        {isFormOpen && isAdmin && (
          <div className={`mb-12 p-6 rounded-xl ${darkMode ? 'bg-dark-100' : 'bg-white'} shadow-lg`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
                Add New Skill
              </h3>
              <button onClick={toggleForm} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="skill"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Skill Name*
                  </label>
                  <input
                    id="skill"
                    name="skill"
                    type="text"
                    required
                    value={newSkill.skill}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="e.g. JavaScript"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="category"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={newSkill.category}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  >
                    <option value="">Select a category</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Desktop">Desktop</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label 
                    htmlFor="description"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={newSkill.description}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Describe your experience with this skill"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label 
                    htmlFor="percentage"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Proficiency ({newSkill.percentage}%)
                  </label>
                  <input
                    id="percentage"
                    name="percentage"
                    type="range"
                    min="0"
                    max="100"
                    value={newSkill.percentage}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
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
                  Save Skill
                </button>
              </div>
            </form>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.id} className="relative group">
              <Skillscard
                skill={skill.skill}
                percentage={skill.percentage}
                category={skill.category}
                description={skill.description}
              />
              {isAdmin && (
                <button 
                  onClick={() => deleteSkill(skill.id)}
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
  )
}

export default Skills