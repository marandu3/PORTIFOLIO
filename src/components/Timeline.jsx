import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import AdminControls from './AdminControls'
import { FaTimes, FaBriefcase, FaGraduationCap, FaAward, FaCode, FaCalendarAlt } from 'react-icons/fa'

function Timeline() {
  const { darkMode } = useTheme();
  const { isAdmin } = useAuth();
  
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('portfolio-timeline');
    return savedEvents ? JSON.parse(savedEvents) : [
      {
        id: 1,
        title: "Started Computer Engineering at University of Dar es Salaam",
        date: "2023",
        type: "education",
        description: "Began my journey in Computer Engineering and Information Technology"
      },
      {
        id: 2,
        title: "First Web Development Project",
        date: "2023",
        type: "project",
        description: "Built my first comprehensive web application using React and Tailwind CSS"
      },
      {
        id: 3,
        title: "Completed Advanced Level Education",
        date: "2021 - 2023",
        type: "education",
        description: "Graduated from Marian Boys High School with Division I"
      },
      {
        id: 4,
        title: "Started Learning Programming",
        date: "2021",
        type: "personal",
        description: "Began self-learning programming fundamentals and web development basics"
      }
    ];
  });
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    type: "personal",
    description: ""
  });
  
  useEffect(() => {
    localStorage.setItem('portfolio-timeline', JSON.stringify(events));
  }, [events]);
  
  const toggleForm = () => setIsFormOpen(!isFormOpen);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const eventToAdd = {
      id: Date.now(),
      ...newEvent
    };
    
    // Add to beginning of array to show newest first
    setEvents([eventToAdd, ...events]);
    
    // Reset form
    setNewEvent({
      title: "",
      date: "",
      type: "personal",
      description: ""
    });
    
    setIsFormOpen(false);
  };
  
  const deleteEvent = (id) => {
    if (!isAdmin) return;
    setEvents(events.filter(event => event.id !== id));
  };
  
  const getEventIcon = (type) => {
    const iconSize = 20;
    switch (type) {
      case 'education':
        return <FaGraduationCap size={iconSize} />;
      case 'work':
        return <FaBriefcase size={iconSize} />;
      case 'award':
        return <FaAward size={iconSize} />;
      case 'project':
        return <FaCode size={iconSize} />;
      default:
        return <FaCalendarAlt size={iconSize} />;
    }
  };
  
  const getEventColor = (type, darkMode) => {
    switch (type) {
      case 'education':
        return darkMode ? 'from-blue-700 to-blue-900' : 'from-blue-500 to-blue-700';
      case 'work':
        return darkMode ? 'from-green-700 to-green-900' : 'from-green-500 to-green-700';
      case 'award':
        return darkMode ? 'from-yellow-700 to-yellow-900' : 'from-yellow-500 to-yellow-700';
      case 'project':
        return darkMode ? 'from-purple-700 to-purple-900' : 'from-purple-500 to-purple-700';
      default:
        return darkMode ? 'from-primary-700 to-primary-900' : 'from-primary-500 to-primary-700';
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-200' : 'bg-light-100'} transition-colors duration-300 py-8 px-4`}>
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
            My Journey
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-light-300' : 'text-gray-600'}`}>
            A timeline of key milestones, achievements, and experiences
          </p>
        </div>
        
        <AdminControls 
          onAdd={toggleForm} 
          showAddForm={isFormOpen} 
          itemType="Event"
        />
        
        {isFormOpen && isAdmin && (
          <div className={`mb-12 p-6 rounded-xl ${darkMode ? 'bg-dark-100' : 'bg-white'} shadow-lg`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
                Add Timeline Event
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
                    Event Title*
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={newEvent.title}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="e.g. Started University"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="date"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Date/Period*
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="text"
                    required
                    value={newEvent.date}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="e.g. 2023 or 2019-2022"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="type"
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-light-200' : 'text-gray-700'}`}
                  >
                    Event Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={newEvent.type}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  >
                    <option value="education">Education</option>
                    <option value="work">Work Experience</option>
                    <option value="project">Project</option>
                    <option value="award">Award/Achievement</option>
                    <option value="personal">Personal</option>
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
                    value={newEvent.description}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-dark-300 border-dark-100 text-light-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Describe the event or milestone"
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
                  Add to Timeline
                </button>
              </div>
            </form>
          </div>
        )}
        
        <div className="relative border-l-4 border-primary-500 ml-4 md:ml-12 pl-6 pb-6">
          {events.map((event, index) => (
            <div key={event.id} className="mb-12 relative group">
              {/* Timeline dot */}
              <div className={`absolute -left-10 w-6 h-6 rounded-full bg-gradient-to-r ${getEventColor(event.type, darkMode)} flex items-center justify-center text-white`}>
                {getEventIcon(event.type)}
              </div>
              
              {/* Event card */}
              <div className={`shadow-lg rounded-lg overflow-hidden ${
                darkMode ? 'bg-dark-100 shadow-primary-900/20' : 'bg-white shadow-gray-400/30'
              }`}>
                <div className={`h-2 bg-gradient-to-r ${getEventColor(event.type, darkMode)}`}></div>
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-light-100' : 'text-gray-800'}`}>
                      {event.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-dark-300 text-light-300' : 'bg-light-200 text-gray-700'
                    }`}>
                      {event.date}
                    </span>
                  </div>
                  
                  <p className={`${darkMode ? 'text-light-300' : 'text-gray-600'}`}>
                    {event.description}
                  </p>
                </div>
              </div>
              
              {isAdmin && (
                <button 
                  onClick={() => deleteEvent(event.id)}
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

export default Timeline