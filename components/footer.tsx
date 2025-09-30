export function Footer() {
  return (
    <footer className="bg-black text-white py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-in fade-in-0 slide-in-from-left-8 duration-700">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Would you like to work together?</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I’m open to new projects and collaborations. The fastest way to reach me is email.
            </p>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">📧</span>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:elisa@elisahertzler.com" className="text-gray-300 hover:text-white underline underline-offset-4">
                  elisa@elisahertzler.com
                </a>
              </div>
            </div>
          </div>

          {/* Right content - Contact info */}
          <div className="animate-in fade-in-0 slide-in-from-right-8 duration-700 delay-200">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Get in touch</h3>
              <a
                href="mailto:elisa@elisahertzler.com"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                elisa@elisahertzler.com
              </a>
              <p className="text-gray-400 mt-4 text-sm">I usually reply within 1–2 days.</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-3xl md:text-4xl font-bold leading-none tracking-tight" style={{ fontFamily: 'var(--font-hand)' }}>
              Elisa Hertzler
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-gray-400">© 2025 Elisa Hertzler. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy
              </a>
              <a href="/impressum" className="text-gray-400 hover:text-white transition-colors duration-200">
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
