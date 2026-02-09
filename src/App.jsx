import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import IDEHeader from './components/IDEHeader'
import CodeEditor from './components/CodeEditor'
import Terminal from './components/Terminal'
import FileExplorer from './components/FileExplorer'
import PerformanceMetrics from './components/PerformanceMetrics'
import ErrorBoundary from './components/ErrorBoundary'
import OnboardingTour from './components/OnboardingTour'
import KeyboardHints from './components/KeyboardHints'
import BackToTop from './components/BackToTop'
import LoadingBar from './components/LoadingBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isFileExplorerOpen, setIsFileExplorerOpen] = useState(false)
  const [showMetrics, setShowMetrics] = useState(true)
  const [bootComplete, setBootComplete] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Quick boot sequence
  useEffect(() => {
    const bootTimer = setTimeout(() => setBootComplete(true), 1000)
    return () => clearTimeout(bootTimer)
  }, [])

  const handleKeyboard = (e) => {
    // Keyboard shortcuts for IDE experience
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case '`':
          e.preventDefault()
          setIsTerminalOpen(true)
          break
        case 'b':
          e.preventDefault()
          setIsFileExplorerOpen(true)
          break
        case 'j':
          e.preventDefault()
          setShowMetrics(!showMetrics)
          break
        default:
          break
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)
    return () => document.removeEventListener('keydown', handleKeyboard)
  }, [showMetrics])

  // Auto-hide metrics on mobile, but keep sidebar functionality
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowMetrics(true) // Keep metrics enabled for mobile drawer
        setIsMobileMenuOpen(false) // Close mobile menu on resize
      } else {
        setShowMetrics(true) // Show on desktop
        setIsMobileMenuOpen(false) // Reset mobile menu state
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!bootComplete) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-green-600 dark:text-green-400 font-mono flex items-center justify-center px-4 transition-colors duration-300">
        <div className="text-center space-y-4 max-w-md">
          <div className="text-xl md:text-2xl mb-8 text-gray-800 dark:text-gray-200">🚀 Santosh's Development Environment</div>
          <div className="space-y-2 text-xs md:text-sm">
            <div className="flex items-center gap-3 justify-center">
              <div className="animate-spin w-4 h-4 border border-green-600 dark:border-green-400 border-t-transparent rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Loading portfolio modules...</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="animate-pulse w-4 h-4 bg-green-600 dark:bg-green-400 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Initializing React environment...</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="animate-bounce w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Connecting to Syscloud systems...</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-4 h-4 bg-yellow-600 dark:bg-yellow-400 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Ready! Starting portfolio...</span>
            </div>
          </div>
          <div className="mt-8 text-xs text-gray-600 dark:text-gray-500 hidden md:block">
            Press Ctrl+` for terminal, Ctrl+B for file explorer, Ctrl+J for metrics
          </div>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col font-sans transition-colors duration-300">
        {/* Page transition loading bar */}
        <LoadingBar />

        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Onboarding Tour for first-time visitors */}
        <OnboardingTour />

        {/* IDE Header */}
        <IDEHeader
          onTerminalOpen={() => setIsTerminalOpen(true)}
          onFileExplorerOpen={() => setIsFileExplorerOpen(true)}
          onMetricsToggle={() => setShowMetrics(!showMetrics)}
        />

        {/* Mobile Menu Toggle Button - Improved position */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden fixed bottom-20 right-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform ${isMobileMenuOpen ? 'rotate-90 scale-110' : 'scale-100'
            }`}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          )}

          {/* Pulse indicator when menu is available */}
          {!isMobileMenuOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          )}
        </button>

        {/* Main IDE Layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* Performance Metrics Sidebar - Desktop & Mobile Drawer */}
          <div
            className={`
            fixed md:relative inset-y-0 left-0 z-40
            w-80 md:w-80
            border-r border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900
            p-4 overflow-y-auto
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            ${showMetrics ? 'md:translate-x-0' : 'md:hidden'}
            top-14 md:top-auto
          `}
          >
            <PerformanceMetrics />

            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <div className="text-xs text-gray-600 dark:text-gray-400 font-mono mb-3">QUICK ACTIONS</div>
              <button
                onClick={() => {
                  setIsTerminalOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                className="w-full text-left px-3 py-2 text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 transition-colors text-gray-800 dark:text-gray-100"
              >
                <span className="text-green-600 dark:text-green-400">$</span> Open Terminal
              </button>
              <button
                onClick={() => {
                  setIsFileExplorerOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                className="w-full text-left px-3 py-2 text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 transition-colors text-gray-800 dark:text-gray-100"
              >
                <span className="text-blue-600 dark:text-blue-400">📁</span> Browse Files
              </button>
              <a
                href="/SantoshCV.pdf"
                download="SantoshCV.pdf"
                className="w-full text-left px-3 py-2 text-sm bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800 hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-700 dark:hover:to-blue-700 rounded border border-purple-500 dark:border-purple-600 transition-colors block text-white"
              >
                <span className="text-yellow-300 dark:text-yellow-400">📄</span> Download Resume
              </a>
            </div>
          </div>

          {/* Overlay for mobile menu */}
          {isMobileMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-14"
              onClick={() => setIsMobileMenuOpen(false)}
              onTouchEnd={() => setIsMobileMenuOpen(false)}
              style={{ touchAction: 'manipulation' }}
            />
          )}

          {/* Main Content Area */}
          <div id="main-content" className="flex-1 flex flex-col overflow-auto">
            <CodeEditor>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </CodeEditor>
          </div>
        </div>

        {/* Interactive Overlays */}
        <Terminal
          isVisible={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
        />

        <FileExplorer
          isVisible={isFileExplorerOpen}
          onClose={() => setIsFileExplorerOpen(false)}
        />

        {/* Keyboard shortcuts hint - Dismissible */}
        <KeyboardHints />

        {/* Back to top button */}
        <BackToTop />
      </div>
    </ErrorBoundary>
  )
}

export default App