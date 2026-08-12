import { useState } from 'react'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import useDarkMode from '../../hooks/useDarkMode'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const CV_URL = '/assets/Timothy_Imani_CV.pdf'

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg text-slate-900 dark:text-white">
          Timothy Imani <span aria-hidden="true">😎💻</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={CV_URL}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            <Download size={16} />
            Download CV
          </a>
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-5 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={CV_URL}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white text-sm font-medium"
              >
                <Download size={16} />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}