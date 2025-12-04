import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const services = [
    {
      icon: '🏥',
      title: 'Post-Injury Rehabilitation',
      description: 'Comprehensive recovery programs to restore function and mobility after injuries.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM03y_WDmhZMww0wwh6V-sx0p8qNUYTIFTVw&s',
    },
    {
      icon: '⚽',
      title: 'Sports Physiotherapy',
      description: 'Specialized care for athletes to enhance performance and prevent injuries.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6HvKybpd339nIAojlsCTkqb9FAWeusJbNQ&s',
    },
    {
      icon: '💊',
      title: 'Chronic Pain Management',
      description: 'Effective strategies to manage and reduce long-term pain conditions.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7x7mcXIGYLWTe0SFFT9Ry72_OilAHtw2gLQ&s',
    },
    {
      icon: '🦴',
      title: 'Joint & Muscle Therapy',
      description: 'Targeted treatments for joint and muscle-related issues and conditions.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCv-qkzIJ-Z6grsic719Bdfa8-xpyRN0GMg&s',
    },
    {
      icon: '🪡',
      title: 'Dry Needling',
      description: 'Advanced technique for pain relief and muscle function improvement.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pxPJ3IqnAWQq85CZq83lSrUIeVzFr8TpAQ&s',
    },
    {
      icon: '🥄',
      title: 'Cupping Therapy',
      description: 'Traditional therapy to promote healing and reduce muscle tension.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrMbY788l6db1Ji-dEIOUk2Ge7m491wThYQ&s',
    },
  ]

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy and holistic wellness services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-300 overflow-hidden relative group"
            >
              {/* Image overlay on hover - shows therapy/treatment in action */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.9
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0 bg-white/98 z-10 flex items-center justify-center rounded-xl backdrop-blur-sm"
              >
                <div className="text-center p-4">
                  <motion.img
                    src={service.image}
                    alt={`${service.title} by Dr. Niharika Chowtapalli - Physiotherapy treatment in Vijayawada`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-full h-full max-w-[280px] max-h-[280px] object-cover rounded-xl mx-auto mb-3 shadow-2xl border-2 border-blue-100"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none'
                      const parent = e.target.parentElement
                      if (parent) {
                        parent.innerHTML = '<p class="text-gray-400 text-sm">Image unavailable</p>'
                      }
                    }}
                  />
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-xs text-gray-600 font-medium"
                  >
                    {service.title}
                  </motion.p>
                </div>
              </motion.div>
              
              {/* Service Icon with animation */}
              <motion.div
                animate={{ 
                  scale: hoveredIndex === index ? 1.2 : 1,
                  rotate: hoveredIndex === index ? 5 : 0
                }}
                transition={{ duration: 0.3 }}
                className="text-5xl mb-4 relative z-0"
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-0">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-0">
                {service.description}
              </p>
              
              {/* Hover indicator */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-green-600"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Your Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

