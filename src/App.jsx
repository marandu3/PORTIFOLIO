import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/Abouts'
import Projects from './components/Projects'
import Landing from './components/Landing'
import Contact from './components/Contacts'
import Email from './components/Email'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Education from './components/Education'
import LoginModal from './components/LoginModal'
import { useTheme } from './context/ThemeContext'

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-200 text-light-100' : 'bg-white text-black'} transition-colors duration-300`}>
      <Navbar />
      <div className={`container mx-auto ${darkMode ? 'bg-dark-200' : 'bg-white'} transition-colors duration-300`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Abouts" element={<About />} >
            <Route path="Abouts/Education" element={<Education/>} />
            <Route path="Abouts/Skills" element={<Skills/>} />
            <Route path="Abouts/Timeline" element={<Timeline/>} />
          </Route>
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/email" element={<Email />} />
          <Route path="*" element={<div className="flex justify-center items-center h-screen text-xl font-bold">Not Found</div>} />
        </Routes>
      </div>
      <LoginModal />
    </div>
  )
}

export default App
