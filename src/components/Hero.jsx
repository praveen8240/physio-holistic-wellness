import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Professional physiotherapy images - replace with your own images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80', // Physiotherapy session
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80', // Wellness therapy
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80', // Rehabilitation
    'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&q=80', // Holistic wellness
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80', // Professional care
  ]

  // Auto-slide images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20"
    >
      {/* Sliding Background Images with Light Opacity */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 90 }}
            animate={{
              opacity: currentImageIndex === index ? 0.7 : 0,
              scale: currentImageIndex === index ? 1.1 : 1,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/60 to-green-50/80"></div>
      </div>

      {/* Background Pattern (subtle overlay) */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Physiotherapy Care
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Your Journey to Natural Healing Starts Here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              <span className="text-2xl group-hover:animate-bounce">🏠</span>
              <span>Book Home Consultation</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Contact Now
            </motion.button>
          </motion.div>

          {/* Marketing Banner for Home Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl animate-pulse">✨</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      🏠 Home Consultation Available!
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Get professional physiotherapy care in the comfort of your home
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md whitespace-nowrap"
                >
                  Book Now →
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 flex justify-center space-x-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Indicators */}
      {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index
                ? 'w-8 bg-blue-600'
                : 'w-2 bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div> */}
    </section>
  )
}

export default Hero

