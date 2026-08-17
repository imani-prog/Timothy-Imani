import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

const About = lazy(() => import('./components/sections/About'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Projects = lazy(() => import('./components/sections/Projects'))
const EngineeringDashboard = lazy(() => import('./components/sections/EngineeringDashboard'))
const Services = lazy(() => import('./components/sections/Services'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/sections/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-20" aria-hidden="true" />}>
          <About />
          <Experience />
          <Projects />
          {/* <EngineeringDashboard /> */}
          <Services />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App