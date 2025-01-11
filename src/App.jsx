import { Routes,Route } from 'react-router'
import Navbar from './components/Navbar'
import About from './components/Abouts'
import Projects from './components/Projects'
import Landing from './components/Landing'
import Blog from './components/Blog'
import Contact from './components/Contacts'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
      
      
    
    
  )
}

export default App
