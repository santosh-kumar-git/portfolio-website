import { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    setIsScrolling(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    // Reset scrolling state after animation
    setTimeout(() => setIsScrolling(false), 1000)
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[140px] right-4 md:bottom-24 md:right-6 z-40 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } transition-all duration-300`}
      aria-label="Scroll back to top"
    >
      {/* Button container with glassmorphism effect */}
      <div className={`relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
        isScrolling ? 'scale-90' : 'scale-100 group-hover:scale-105'
      } focus:outline-none focus:ring-4 focus:ring-blue-500/50`}>

        {/* Shine effect overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Icon */}
        <svg
          className={`w-5 h-5 md:w-5 md:h-5 text-white relative z-10 transition-transform duration-300 ${
            isScrolling ? 'animate-bounce' : 'group-hover:-translate-y-1'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>

        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-blue-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
      </div>

      {/* Tooltip on hover - Desktop only */}
      <div className="absolute bottom-full right-0 mb-3 hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform group-hover:-translate-y-1">
        <div className="bg-gray-900 dark:bg-gray-800 text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-2xl border border-gray-700">
          Back to top
          <div className="absolute top-full right-6 -mt-1">
            <div className="border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-900 dark:border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </button>
  )
}

export default BackToTop
