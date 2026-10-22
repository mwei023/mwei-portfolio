import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Work from './components/sections/Work'
import About from './components/sections/About'
import PhilosophySection from './components/sections/Philosophy'
import Skills from './components/sections/Skills'
import Journey from './components/sections/Journey'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-body">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <PhilosophySection />
        <Skills />
        <Journey />
        <Contact />
      </main>
    </div>
  )
}
