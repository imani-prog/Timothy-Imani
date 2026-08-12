import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* About, Skills, Projects, Education, Services, Contact go here next */}
      </main>
    </div>
  )
}

export default App