import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About Dr. Niharika Chowtapalli
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 sm:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <img 
                  src="/Niharika.jpg" 
                  alt="Dr. Niharika Chowtapalli"
                  className="w-48 h-48 rounded-full object-cover shadow-xl"
                />
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Dr. Niharika Chowtapalli
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  MPT (Ortho) - Certified Physiotherapist
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Niharika Chowtapalli is a highly qualified and experienced physiotherapist
                  specializing in orthopedic rehabilitation. With her Master's in Physiotherapy
                  (Orthopedics), she brings a comprehensive approach to healing, combining evidence-based
                  techniques with holistic wellness principles.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Her passion lies in helping patients recover from injuries, manage chronic pain,
                  and improve their overall quality of life through personalized treatment plans.
                  Dr. Niharika believes in treating the whole person, not just the symptoms,
                  ensuring long-term wellness and prevention of future issues.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

