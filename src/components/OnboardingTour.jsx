import { useState, useEffect } from 'react'

const OnboardingTour = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Device-specific tour steps
  const mobileSteps = [
    {
      title: "Welcome to My Portfolio!",
      description: "This is an interactive IDE-themed portfolio. Let me show you around!",
      icon: "👋",
      position: "center"
    },
    {
      title: "Navigation Tabs",
      description: "Tap these tabs at the top to explore different sections - Home, About, Projects, Resume, and Contact.",
      icon: "🗂️",
      position: "center"
    },
    {
      title: "Mobile Menu",
      description: "Tap the blue menu button in the bottom-left corner to access quick actions, metrics, and download my resume.",
      icon: "📱",
      position: "center"
    },
    {
      title: "Terminal & Tools",
      description: "Tap the toolbar icons at the top to open the terminal or file explorer. Try typing 'help' in the terminal!",
      icon: "💻",
      position: "center"
    },
    {
      title: "You're All Set!",
      description: "Explore my projects, download my resume, or get in touch. Enjoy!",
      icon: "🚀",
      position: "center"
    }
  ]

  const desktopSteps = [
    {
      title: "Welcome to My Portfolio!",
      description: "This is an interactive IDE-themed portfolio. Let me show you around!",
      icon: "👋",
      position: "center"
    },
    {
      title: "Navigation Tabs",
      description: "Click these tabs to explore different sections - Home, About, Projects, Resume, and Contact.",
      icon: "🗂️",
      position: "top"
    },
    {
      title: "Performance Sidebar",
      description: "The sidebar shows my key metrics and achievements. Use Quick Actions for easy access to terminal, files, and resume.",
      icon: "📊",
      position: "left"
    },
    {
      title: "Toolbar & IDE Features",
      description: "Click these icons to open the terminal or file explorer. Hover over icons for tooltips!",
      icon: "💻",
      position: "top"
    },
    {
      title: "Keyboard Shortcuts",
      description: "Power users: Press Ctrl+` for terminal, Ctrl+B for files, Ctrl+J to toggle metrics. Check the Help menu for more!",
      icon: "⌨️",
      position: "center"
    },
    {
      title: "You're All Set!",
      description: "Explore my projects, download my resume, or get in touch. Enjoy!",
      icon: "🚀",
      position: "center"
    }
  ]

  useEffect(() => {
    // Detect device type
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()

    // Check if user has seen the tour
    const hasSeenTour = localStorage.getItem('hasSeenTour')
    if (!hasSeenTour) {
      // Show tour after a brief delay
      setTimeout(() => setIsVisible(true), 1500)
    }
  }, [])

  // Use device-specific steps
  const steps = isMobile ? mobileSteps : desktopSteps

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handleSkip = () => {
    handleComplete()
  }

  const handleComplete = () => {
    localStorage.setItem('hasSeenTour', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  const step = steps[currentStep]
  const isLastStep = currentStep === steps.length - 1

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-70 z-[60] animate-fadeIn" />

      {/* Tour Card */}
      <div className={`fixed z-[70] ${
        step.position === 'center' ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' :
        step.position === 'top' ? 'top-24 left-1/2 -translate-x-1/2' :
        step.position === 'left' ? 'top-1/2 left-4 -translate-y-1/2' :
        'bottom-24 left-1/2 -translate-x-1/2'
      } w-[90%] max-w-md animate-slideUp`}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border-2 border-blue-500 overflow-hidden">
          {/* Progress bar */}
          <div className="h-1 bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="text-4xl mb-4 text-center">{step.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              {step.description}
            </p>

            {/* Step indicator */}
            <div className="flex justify-center gap-2 mb-6">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentStep
                      ? 'w-8 bg-blue-600'
                      : index < currentStep
                      ? 'w-2 bg-blue-400'
                      : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              {!isLastStep && (
                <button
                  onClick={handleSkip}
                  className="flex-1 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg"
                >
                  Skip Tour
                </button>
              )}
              <button
                onClick={handleNext}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isLastStep ? "Get Started" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OnboardingTour
