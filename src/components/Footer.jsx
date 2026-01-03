const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Center for Physio & Holistic Wellness</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in physiotherapy and holistic wellness care in Vijayawada
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-sm">📷</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="block">📍 Dr. No: 36-9-19/2, Nehru Nagar</span>
                <span className="block">Water Tank Road, Labbipet</span>
                <span className="block">Vijayawada – 520010</span>
              </li>
              <li>
                <a
                  href="tel:+919441372425"
                  className="hover:text-white transition-colors"
                >
                  📞 +91 94413 72425
                </a>
              </li>
              <li>
                <div className="flex flex-col space-y-1">
                  <a
                    href="mailto:contact@centerforphysio.com"
                    className="hover:text-white transition-colors"
                  >
                    ✉️ contact@centerforphysio.com
                  </a>
                  {/* <a
                    href="mailto:drniharika@zohomail.in"
                    className="hover:text-white transition-colors"
                  >
                    ✉️ drniharika@zohomail.in
                  </a> */}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Center for Physio & Holistic Wellness. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

