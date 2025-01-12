import { Routes,Route } from 'react-router'
import Navbar from './components/Navbar'
import About from './components/Abouts'
import Projects from './components/Projects'
import Landing from './components/Landing'
import Contact from './components/Contacts'
import Email from './components/Email'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Abouts" element={<About />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/email" element={<Email />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
      
      
    
    
  )
}

export default App
