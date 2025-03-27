import React, { useState, useEffect } from 'react'
import Educard from '../components/AboutCard'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import AdminControls from './AdminControls'
import { FaTimes } from 'react-icons/fa'

function Education() {
  const { darkMode } = useTheme();
  const { isAdmin } = useAuth();
  const [educations, setEducations] = useState(() => {
    const savedEducation = localStorage.getItem('portfolio-education');
    return savedEducation ? JSON.parse(savedEducation) : [
      {
        id: 1,
        level: "PRIMARY EDUCATION",
        school: "DIAGWA SEMINARY",
        location: "SINGIDA",
        finished: "2010 - 2016",
        grade: "A"
      },
      {
        id: 2,
        level: "ORDINARY LEVEL",
        school: "DUNG'UNYI SEMINARY",
        location: "SINGIDA",
        finished: "2017 - 2020",
        grade: "DIV: 1 P: 7"
      },
      {
        id: 3,
        level: "ADVANCED LEVEL",
        school: "MARIAN BOYS HIGH SCHOOL",
        location: "BAGAMOYO",
        finished: "2021 - 2023",
        grade: "DIV: 1 P: 3"
      },
      {
        id: 4,
        level: "UNDERGRADUATE EDUCATION",
        school: "UNIVERSITY OF DAR ES SALAAM",
        location: "DAR ES SALAAM",
        course: "COURSE: COMPUTER ENGINEERING AND IT",
        finished: "2023 ->"
      }
    ];
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newEducation, setNewEducation] = useState({
    level: "",
    school: "",
    location: "",
    finished: "",
    course: "",
    grade: ""
  });

  useEffect(() => {
    localStorage.setItem('portfolio-education', JSON.stringify(educations));
  }, [educations]);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({
      ...newEducation,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const educationToAdd = {
      id: Date.now(),
      ...newEducation
    };
    
    setEducations([...educations, educationToAdd]);
    
    // Reset form
    setNewEducation({
      level: "",
      school: "",
      location: "",
      finished: "",
      course: "",
      grade: ""
    });
    
    setIsFormOpen(false);
  };

  const deleteEducation = (id) => {
    if (!isAdmin) return;
    setEducations(educations.filter(edu => edu.id !== id));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-200' : 'bg-light-100'} transition-colors duration-300 py-8 px-4`}>
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
            Education
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-light-300' : 'text-gray-600'}`}>
            My academic journey and qualifications
          </p>
        </div>

        <AdminControls 
          onAdd={toggleForm} 
          showAddForm={isFormOpen} 
          itemType="Education"
        />

        {isFormOpen && isAdmin && (
          <div className={`mb-12 p-6 rounded-xl ${darkMode ? 'bg-dark-100' : 'bg-white'} shadow-lg`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
                Add Education
              </h3>
              <button onClick={toggleForm} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="level"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Education Level*
                  </label>
                  <input
                    id="level"
                    name="level"
                    type="text"
                    required
                    value={newEducation.level}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="e.g. PRIMARY EDUCATION"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="school"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    School/Institution*
                  </label>
                  <input
                    id="school"
                    name="school"
                    type="text"
                    required
                    value={newEducation.school}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="School name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="location"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Location*
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={newEducation.location}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="City, Country"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="finished"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Duration*
                  </label>
                  <input
                    id="finished"
                    name="finished"
                    type="text"
                    required
                    value={newEducation.finished}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="e.g. 2018 - 2022"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="course"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Course/Program
                  </label>
                  <input
                    id="course"
                    name="course"
                    type="text"
                    value={newEducation.course}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="e.g. COMPUTER ENGINEERING"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="grade"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Grade/GPA
                  </label>
                  <input
                    id="grade"
                    name="grade"
                    type="text"
                    value={newEducation.grade}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="e.g. 3.8/4.0 or DIV: 1"
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
                  Save Education
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((education) => (
            <div key={education.id} className="relative group">
              <Educard
                level={education.level}
                school={education.school}
                location={education.location}
                finished={education.finished}
                course={education.course}
                grade={education.grade}
              />
              {isAdmin && (
                <button 
                  onClick={() => deleteEducation(education.id)}
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

export default Education