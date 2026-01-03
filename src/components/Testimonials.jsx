import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Suseela',
      condition: 'Knee Pain',
      text: 'After struggling with severe knee pain for months, Dr. Niharika’s treatment helped me regain my mobility. Her approach is very gentle and effective.',
      rating: 5,
    },
    {
      name: 'Vasundhara',
      condition: 'Back Pain',
      text: 'I had improved a lot from my chronic back pain. The exercises and manual therapy sessions were exactly what I needed.',
      rating: 5,
    },
    {
      name: 'Ravi',
      condition: 'Rehabilitation',
      text: 'Doctor Niharika provided exceptional care during my recovery. Her dedication and expertise made a huge difference in my rehabilitation journey.',
      rating: 4,
    },
  ]

  return (
    <section
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
            What Our Patients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="text-gray-600 font-semibold">
                — {testimonial.name}
              </p>
              <p className="text-sm text-blue-600">
                ({testimonial.condition})
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

