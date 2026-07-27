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
    <div className="min-h-screen bg-paper text-ink">
      <Toaster
        toastOptions={{
          style: {
            background: '#0F172A',
            color: '#F7F4EE',
            borderRadius: '10px',
            fontFamily: 'Source Sans 3, sans-serif',
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
