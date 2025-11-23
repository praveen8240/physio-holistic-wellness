import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: '🏥',
      title: 'Post-Injury Rehabilitation',
      description: 'Comprehensive recovery programs to restore function and mobility after injuries.',
    },
    {
      icon: '⚽',
      title: 'Sports Physiotherapy',
      description: 'Specialized care for athletes to enhance performance and prevent injuries.',
    },
    {
      icon: '💊',
      title: 'Chronic Pain Management',
      description: 'Effective strategies to manage and reduce long-term pain conditions.',
    },
    {
      icon: '🦴',
      title: 'Joint & Muscle Therapy',
      description: 'Targeted treatments for joint and muscle-related issues and conditions.',
    },
    {
      icon: '🪡',
      title: 'Dry Needling',
      description: 'Advanced technique for pain relief and muscle function improvement.',
    },
    {
      icon: '🥄',
      title: 'Cupping Therapy',
      description: 'Traditional therapy to promote healing and reduce muscle tension.',
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
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
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

