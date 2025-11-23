import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WhyTrustUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: '✓',
      title: 'Experienced & Certified Physiotherapists',
      description: 'Expert care from qualified professionals',
    },
    {
      icon: '📋',
      title: 'Personalized Treatment Plans',
      description: 'Tailored to your unique needs and goals',
    },
    {
      icon: '🌿',
      title: 'Advanced & Holistic Care Approach',
      description: 'Combining modern techniques with holistic wellness',
    },
    {
      icon: '🔧',
      title: 'Modern Equipment & Therapeutic Techniques',
      description: 'State-of-the-art tools for effective treatment',
    },
    {
      icon: '🏠',
      title: 'Comfortable, Safe & Caring Environment',
      description: 'Your comfort and safety are our priorities',
    },
    {
      icon: '📱',
      title: 'Home Visit & Online Consultation Available',
      description: 'Flexible options to suit your schedule',
    },
  ]

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-50 to-green-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Patients Trust Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyTrustUs

