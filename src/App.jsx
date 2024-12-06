import './index.css'

const App = () =>  {

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-yellow-400">
          Website Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-300">
          We are currently improving your experience. The website will be live by{' '}
          <span className="block mt-2 font-semibold text-blue-400">
            Tomorrow at 10:00 AM
          </span>
        </p>

        {/* Contact Info */}
        <div className="space-y-6 mt-8">
          <div>
            <p className="text-base md:text-lg text-gray-300">
              For any urgent queries, please contact us at:
            </p>
            <a
              href="mailto:vibrantreload@vibrantentertainments.live"
              className="text-yellow-400 font-medium text-sm md:text-base break-all hover:text-yellow-300 transition duration-200 underline mt-2 inline-block"
            >
              vibrantreload@vibrantentertainments.live
            </a>
          </div>

          <div className="space-y-2">
            <span className="block text-yellow-400 font-medium">Phone:</span>
            <a
              href="tel:+919030893336"
              className="text-yellow-400 font-medium hover:text-yellow-300 transition duration-200 underline"
            >
              +919030893336
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-gray-500 text-xs md:text-sm">
          Thank you for your patience!
        </p>
      </div>
    </div>
  )
}

export default App
