import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import useDarkMode from '../../hooks/useDarkMode'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]


export default function Navbar() {
  // const [isDark, setIsDark] = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80  backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#" className="font-bold font-serif text-lg text-slate-900">
          Timothy Imani <span aria-hidden="true"></span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-serif font-semibold  hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
{/* 
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 cursor-pointer transition-colors"
          >
            {isDark ? <Sun size={28} /> : <Moon size={28} />}
          </button>
        </div> */}

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button> */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-slate-600"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={
          `md:hidden overflow-hidden transition-all duration-500 ease-in-out ` +
          (menuOpen
            ? 'max-h-80 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none')
        }
      >
        <div className="bg-white  border-t border-slate-200  px-5 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-slate-700 transition-opacity duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}