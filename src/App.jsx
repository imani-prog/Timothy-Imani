import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        {/* About, Skills, Projects, Education, Services, Contact go here next */}
      </main>
    </div>
  )
}

export default App