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
import { Toaster } from 'react-hot-toast'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-code-bg text-code-fg">
      <Toaster
        toastOptions={{
          style: {
            background: '#111827',
            color: '#E5E7EB',
            borderRadius: '10px',
            border: '1px solid #1F2937',
            fontFamily: 'IBM Plex Mono, monospace',
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <CareerHighlights />
        <Projects />
        <Technologies />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
