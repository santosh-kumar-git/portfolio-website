import { useState, useEffect } from 'react'

const KeyboardHints = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if user has dismissed the hints
    const dismissed = localStorage.getItem('keyboardHintsDismissed')
    const hasSeenTour = localStorage.getItem('hasSeenTour')

    if (!dismissed) {
      // Show hints after onboarding completes, or after longer delay if no tour
      const delay = hasSeenTour ? 2000 : 8000 // 2s after tour, 8s if no tour
      setTimeout(() => {
        setIsVisible(true)
      }, delay)
    } else {
      setIsDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    localStorage.setItem('keyboardHintsDismissed', 'true')
  }

  const handleShow = () => {
    setIsVisible(true)
  }

  // Desktop: Show dismissible hint. Mobile: Don't show (covered in onboarding)
  return (
    <>
      {/* Main hint card - Desktop only */}
      {isVisible && !isDismissed && (
        <div className="hidden md:block fixed bottom-4 right-4 z-50 animate-slideUp">
          <div className="bg-gray-800 border border-blue-500 rounded-lg shadow-2xl p-4 max-w-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">⌨️</span>
                <h3 className="font-semibold text-white">Keyboard Shortcuts</h3>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700"
                aria-label="Dismiss keyboard hints"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Shortcuts */}
            <div className="space-y-2 text-sm text-gray-300 mb-4">
              <div className="flex items-center justify-between">
                <span>Terminal</span>
                <kbd className="px-2 py-1 bg-gray-700 rounded text-xs font-mono">Ctrl + `</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Files</span>
                <kbd className="px-2 py-1 bg-gray-700 rounded text-xs font-mono">Ctrl + B</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Metrics</span>
                <kbd className="px-2 py-1 bg-gray-700 rounded text-xs font-mono">Ctrl + J</kbd>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Pro tip: Try these shortcuts!</span>
            </div>
          </div>
        </div>
      )}

      {/* Small toggle button when dismissed - Desktop only */}
      {isDismissed && (
        <button
          onClick={handleShow}
          className="hidden md:flex fixed bottom-6 right-6 z-50 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white p-3 rounded-lg border border-gray-700 shadow-lg transition-all items-center gap-2 text-xs font-mono"
          aria-label="Show keyboard shortcuts"
          title="Show keyboard shortcuts"
        >
          <span>⌨️</span>
          <span>Shortcuts</span>
        </button>
      )}
    </>
  )
}

export default KeyboardHints
