import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Technologies from './components/Technologies'
import CareerHighlights from './components/CareerHighlights'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DeveloperCursor from './components/DeveloperCursor'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      <DeveloperCursor />
      <Navbar />
      <Hero />
      <Overview />
      <Technologies />
      <CareerHighlights />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
