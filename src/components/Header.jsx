import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-4'
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2" aria-label="Center for Physio & Holistic Wellness - Home">
            <img src="/favicon.png" alt="Center for Physio & Holistic Wellness Logo - Dr. Niharika Chowtapalli" className="w-10 h-10" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Center for Physio & Holistic Wellness</h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+919441372425"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Book Home Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+919441372425"
              className="block w-full bg-blue-600 text-white px-6 py-2 rounded-full text-center hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Book Home Visit
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header

