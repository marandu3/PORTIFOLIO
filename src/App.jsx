import { Routes,Route } from 'react-router'
import Navbar from './components/Navbar'
import About from './components/Abouts'
import Projects from './components/Projects'
import Landing from './components/Landing'
import Contact from './components/Contacts'
import Email from './components/Email'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Education from './components/Education'

function App() {

  return (
    <div>
      <Navbar />
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
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
      
      
    
    
  )
}

export default App
