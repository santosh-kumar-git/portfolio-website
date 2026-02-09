import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [isCompiling, setIsCompiling] = useState(true)
  const [codeLines, setCodeLines] = useState([])

  const titles = [
    "Software Engineer",
    "Full Stack Developer",
    "React Specialist",
    "AWS Solutions Architect"
  ]

  const codeAnimation = [
    "const santosh = new SoftwareEngineer({",
    "  name: 'Bommepalli Santosh Kumar Reddy',",
    "  company: 'Hornblower Group',",
    "  experience: '4+ years',",
    "  skills: ['Node.js', 'AWS ECS', 'Typescript', 'PostgreSQL'],",
    "  achievements: {",
    "    performance: '23s → <1s (Frontend Virtualization)',",
    "    costReduction: 'AWS ECS Spot Fargate',",
    "    stack: 'React (Primary) + Node.js',",
    "    architecture: 'Event-Driven'",
    "  }",
    "});",
    "",
    "// Compiling portfolio...",
    "// ✓ All tests passed",
    "// ✓ Performance optimized",
    "// ✓ Ready for deployment!"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  useEffect(() => {
    let lineIndex = 0
    const timer = setInterval(() => {
      if (lineIndex < codeAnimation.length) {
        setCodeLines(prev => [...prev, codeAnimation[lineIndex]])
        lineIndex++
      } else {
        setIsCompiling(false)
        clearInterval(timer)
      }
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Code Animation Background - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-10 left-10 bg-gray-900 dark:bg-gray-800 rounded-lg p-4 font-mono text-xs md:text-sm max-w-xs md:max-w-md shadow-2xl border border-gray-700">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${line && line.startsWith('//') ? 'text-green-400' : 'text-gray-300'
                } ${line && line.includes('✓') ? 'text-green-400' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {line}
            </div>
          ))}
          {isCompiling && (
            <div className="flex items-center gap-2 mt-2 text-yellow-400">
              <div className="animate-spin w-3 h-3 border border-yellow-400 border-t-transparent rounded-full"></div>
              <span>Compiling...</span>
            </div>
          )}
        </div>
      </div>

      <div className="container-max relative z-10 py-10 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            {/* IDE-style Header */}
            <div className="inline-block bg-gray-900 text-green-400 px-4 md:px-6 py-2 rounded-lg font-mono text-xs md:text-sm mb-6 md:mb-8 shadow-lg border border-gray-700">
              <span className="text-blue-400">$</span> whoami
              <div className="text-gray-300 mt-1 text-xs md:text-sm">Loading Bommepalli Santosh Kumar Reddy...</div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white mb-2 md:mb-4">
                Software Development Engineer II
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Bommepalli Santosh Kumar Reddy
              </span>
            </h1>

            {/* Dynamic Role */}
            <div className="mb-6 md:mb-8 h-10 md:h-12 flex items-center justify-center">
              <div className="bg-gray-100 dark:bg-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-full border border-gray-200 dark:border-gray-700">
                <span className="text-sm md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {titles[currentTitle]}
                  </span>
                  <span className="animate-pulse ml-2">|</span>
                </span>
              </div>
            </div>

            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 md:gap-3 bg-blue-50 dark:bg-blue-900/30 px-4 md:px-6 py-2 md:py-3 rounded-full border border-blue-200 dark:border-blue-700 mb-6 md:mb-8">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-base text-blue-700 dark:text-blue-300 font-medium">
                Currently @ Hornblower Group
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
              <strong>Full Stack Engineer</strong> focused on <strong>React Ecosystem</strong> and High-Performance UI.
              Expert in <strong>Frontend Virtualization</strong> and Cost-Optimized Cloud Architecture (<strong>AWS ECS Spot</strong>).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4">
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base"
              >
                <span>🚀</span>
                <span>Explore My Work</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a
                href="/SantoshCV.pdf"
                download="SantoshCV.pdf"
                className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <span>📄</span>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Real-time Metrics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto px-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">23s → 1s</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Performance Boost</div>
                <div className="text-xs text-gray-500 mt-1 hidden md:block">Frontend Virtualization</div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">Event-Driven</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Architecture</div>
                <div className="text-xs text-gray-500 mt-1 hidden md:block">AWS ECS & SQS</div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1 md:mb-2">95%</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Delivery Rate</div>
                <div className="text-xs text-gray-500 mt-1 hidden md:block">15+ Projects On-time</div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1 md:mb-2">40%</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Code Reduction</div>
                <div className="text-xs text-gray-500 mt-1 hidden md:block">UI Framework Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Terminal Hint - Desktop only */}
      <div className="hidden md:flex fixed bottom-6 left-6 bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm shadow-xl border border-gray-700 opacity-75 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">$</span>
          <span>Press Ctrl+` for terminal</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero