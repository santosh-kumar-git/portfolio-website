import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Modal from './Modal'
import Tooltip from './Tooltip'
import { useTheme } from '../context/ThemeContext'

const IDEHeader = ({ onTerminalOpen, onFileExplorerOpen, onMetricsToggle }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [cpuUsage, setCpuUsage] = useState(0)
  const [buildStatus, setBuildStatus] = useState('ready')
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false)
  const location = useLocation()
  const { darkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      setCpuUsage(Math.random() * 30 + 20) // 20-50% CPU usage
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getFileName = (path) => {
    switch (path) {
      case '/': return 'Home.jsx'
      case '/about': return 'About.jsx'
      case '/projects': return 'Projects.jsx'
      case '/resume': return 'Resume.jsx'
      case '/contact': return 'Contact.jsx'
      default: return 'NotFound.jsx'
    }
  }

  const tabs = [
    { path: '/', name: 'Home.jsx', icon: '🏠' },
    { path: '/about', name: 'About.jsx', icon: '👨‍💻' },
    { path: '/projects', name: 'Projects.jsx', icon: '🚀' },
    { path: '/resume', name: 'Resume.jsx', icon: '📄' },
    { path: '/contact', name: 'Contact.jsx', icon: '📧' }
  ]

  return (
    <div className="bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
      {/* Menu Bar - Hidden on mobile */}
      <div className="hidden md:block bg-gray-100 dark:bg-gray-900 px-4 py-1 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <span
                className="hover:text-gray-900 dark:hover:text-white cursor-pointer"
                onClick={onFileExplorerOpen}
                title="Open File Explorer"
              >
                File
              </span>
              <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer opacity-50" title="Coming Soon">Edit</span>
              <span
                className="hover:text-gray-900 dark:hover:text-white cursor-pointer"
                onClick={onMetricsToggle}
                title="Toggle Sidebar View"
              >
                View
              </span>
              <span
                className="hover:text-gray-900 dark:hover:text-white cursor-pointer"
                onClick={onTerminalOpen}
                title="Open Terminal"
              >
                Terminal
              </span>
              <span
                className="hover:text-gray-900 dark:hover:text-white cursor-pointer"
                onClick={() => setIsHelpModalOpen(true)}
                title="Show Help"
              >
                Help
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-800 dark:text-gray-200">Santosh's Portfolio IDE</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-200 dark:bg-gray-800 px-2 md:px-4 py-2 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 md:gap-3">
            <Tooltip content="File Explorer (Ctrl+B)" position="bottom">
              <button
                onClick={onFileExplorerOpen}
                className="p-1.5 md:p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="File Explorer"
              >
                📁
              </button>
            </Tooltip>
            <Tooltip content="Terminal (Ctrl+`)" position="bottom">
              <button
                onClick={onTerminalOpen}
                className="p-1.5 md:p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Terminal"
              >
                💻
              </button>
            </Tooltip>
            <Tooltip content="Performance Metrics (Ctrl+J)" position="bottom">
              <button
                onClick={onMetricsToggle}
                className="p-1.5 md:p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Performance Metrics"
              >
                📊
              </button>
            </Tooltip>
            <div className="h-4 md:h-6 w-px bg-gray-400 dark:bg-gray-600 mx-1 md:mx-2"></div>
            <Tooltip content={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} position="bottom">
              <button
                onClick={toggleDarkMode}
                className="relative flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                aria-label="Toggle Dark Mode"
                role="switch"
                aria-checked={darkMode}
              >
                {/* Toggle Track */}
                <div className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-all duration-300 ${darkMode
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600'
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-500'
                  }`}>
                  {/* Toggle Slider */}
                  <div className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${darkMode
                    ? 'translate-x-4 bg-gray-900'
                    : 'translate-x-0 bg-white'
                    }`}>
                    {/* Icon inside slider */}
                    <span className="text-[10px]">
                      {darkMode ? '🌙' : '☀️'}
                    </span>
                  </div>
                </div>
              </button>
            </Tooltip>
            <div className="h-4 md:h-6 w-px bg-gray-400 dark:bg-gray-600 mx-1 md:mx-2"></div>
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="hidden sm:inline">Live</span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 text-xs text-gray-600 dark:text-gray-400">
            <span className="hidden md:inline">CPU: {cpuUsage.toFixed(1)}%</span>
            <span className="hidden sm:inline">Build: {buildStatus}</span>
            <span className="text-xs">{currentTime.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-200 dark:bg-gray-800 px-2 md:px-4">
        <div className="flex items-center gap-0.5 md:gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 text-xs md:text-sm border-b-2 transition-colors whitespace-nowrap ${location.pathname === tab.path
                ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-gray-300 dark:bg-gray-700'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
            >
              <span className="text-sm md:text-base">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.name}</span>
              {location.pathname === tab.path && (
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-orange-500 rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Status Bar - Simplified on mobile */}
      <div className="bg-gray-100 dark:bg-gray-900 px-2 md:px-4 py-1 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-500">
          <div className="flex items-center gap-2 md:gap-4 truncate">
            <span className="truncate">📂 /portfolio/{getFileName(location.pathname)}</span>
            <span className="hidden md:inline">🔧 Ready</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>React 18.2.0</span>
            <span>Vite 4.4.0</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>

      {/* Help Modal */}
      <Modal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        title="Portfolio IDE - Help & Shortcuts"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              ⌨️ Keyboard Shortcuts
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-600 dark:text-gray-300">Open Terminal</span>
                <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded font-mono text-xs">Ctrl + `</kbd>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-600 dark:text-gray-300">File Explorer</span>
                <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded font-mono text-xs">Ctrl + B</kbd>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-gray-600 dark:text-gray-300">Toggle Metrics</span>
                <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded font-mono text-xs">Ctrl + J</kbd>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              💻 Terminal Commands
            </h3>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-green-600 dark:text-green-400">help</code>
                <span className="text-gray-600 dark:text-gray-300 ml-2">- Show all commands</span>
              </div>
              <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-green-600 dark:text-green-400">email</code>
                <span className="text-gray-600 dark:text-gray-300 ml-2">- Contact Santosh</span>
              </div>
              <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-green-600 dark:text-green-400">linkedin</code>
                <span className="text-gray-600 dark:text-gray-300 ml-2">- View LinkedIn profile</span>
              </div>
              <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-green-600 dark:text-green-400">download resume</code>
                <span className="text-gray-600 dark:text-gray-300 ml-2">- Get PDF resume</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              🎨 What is this?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              This portfolio is designed to look like a code editor (IDE) - a tool developers use daily.
              You can navigate using the tabs at the top, or explore interactive features like the terminal
              and file browser. Don't worry if you're not technical - everything is clickable and easy to use!
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Press ESC or click outside to close this dialog
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default IDEHeader