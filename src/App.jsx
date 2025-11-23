import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhyTrustUs from './components/WhyTrustUs'
import Services from './components/Services'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <Hero />
      <About />
      <WhyTrustUs />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

