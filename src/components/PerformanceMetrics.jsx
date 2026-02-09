import { useState, useEffect } from 'react'

const PerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    fps: 60,
    requests: 0,
    uptime: 0,
    buildTime: 0,
    hotReloads: 0,
    optimization: 0
  })

  const [isLive, setIsLive] = useState(true)
  const [buildOptimizing, setBuildOptimizing] = useState(false)

  useEffect(() => {
    // Simulate real-time metrics
    const interval = setInterval(() => {
      if (isLive) {
        setMetrics(prev => ({
          loadTime: Math.random() * 0.5 + 1.2, // 1.2-1.7s
          memoryUsage: Math.random() * 10 + 45, // 45-55MB
          bundleSize: 234 + Math.random() * 10, // 234-244KB
          fps: 58 + Math.random() * 4, // 58-62 FPS
          requests: prev.requests + Math.floor(Math.random() * 3),
          uptime: prev.uptime + 1,
          buildTime: 150 + Math.random() * 50, // Webpack baseline
          hotReloads: prev.hotReloads + (Math.random() > 0.7 ? 1 : 0),
          optimization: Math.min(100, prev.optimization + Math.random() * 2)
        }))
      }
    }, 1000)

    // Simulate periodic build optimization (Santosh's Vite migration impact)
    const optimizationInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setBuildOptimizing(true)
        setTimeout(() => {
          setMetrics(prev => ({
            ...prev,
            buildTime: prev.buildTime * 0.42, // Performance boost simulation
            bundleSize: prev.bundleSize * 0.92 // Optimization
          }))
          setBuildOptimizing(false)
        }, 2000)
      }
    }, 10000)

    return () => {
      clearInterval(interval)
      clearInterval(optimizationInterval)
    }
  }, [isLive])

  const formatUptime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours}h ${minutes}m ${secs}s`
  }

  const getPerformanceColor = (value, thresholds) => {
    if (value <= thresholds.excellent) return 'text-green-400'
    if (value <= thresholds.good) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="space-y-3 md:space-y-4">
      {/* Creative Contact Section */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 p-3 md:p-4 rounded-lg border border-green-400 dark:border-green-500/30">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-green-600 dark:text-green-400 text-base md:text-lg">📱</span>
          <h3 className="text-green-600 dark:text-green-400 font-bold text-xs md:text-sm">CONNECT WITH SANTOSH</h3>
          <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse ml-auto"></div>
        </div>

        <div className="space-y-2 md:space-y-3 text-xs">
          <div className="bg-white dark:bg-gray-800/50 p-2 md:p-3 rounded border border-gray-200 dark:border-transparent">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
              <span className="text-gray-600 dark:text-gray-400 text-xs">STATUS</span>
              <span className="text-green-600 dark:text-green-400 text-xs">🟢 Available for Opportunities</span>
            </div>
            <div className="text-green-700 dark:text-green-300 text-xs">Open to full-time roles & collaborations</div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="mailto:santoshkumar321b@gmail.com"
              className="bg-red-100 hover:bg-red-200 dark:bg-red-800/30 dark:hover:bg-red-800/50 p-3 md:p-2 rounded text-center transition-colors border border-red-300 dark:border-red-600/30 min-h-[60px] md:min-h-0 flex flex-col items-center justify-center"
            >
              <div className="text-red-600 dark:text-red-400 text-lg md:text-base">📧</div>
              <div className="text-red-700 dark:text-red-300 text-xs mt-1">Email</div>
            </a>
            <a
              href="https://linkedin.com/in/bommepalli-santosh-kumar-reddy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-800/30 dark:hover:bg-blue-800/50 p-3 md:p-2 rounded text-center transition-colors border border-blue-300 dark:border-blue-600/30 min-h-[60px] md:min-h-0 flex flex-col items-center justify-center"
            >
              <div className="text-blue-600 dark:text-blue-400 text-lg md:text-base">💼</div>
              <div className="text-blue-700 dark:text-blue-300 text-xs mt-1">LinkedIn</div>
            </a>
            <a
              href="https://github.com/santosh-kumar-git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-100 hover:bg-purple-200 dark:bg-purple-800/30 dark:hover:bg-purple-800/50 p-3 md:p-2 rounded text-center transition-colors border border-purple-300 dark:border-purple-600/30 min-h-[60px] md:min-h-0 flex flex-col items-center justify-center"
            >
              <div className="text-purple-600 dark:text-purple-400 text-lg md:text-base">💻</div>
              <div className="text-purple-700 dark:text-purple-300 text-xs mt-1">GitHub</div>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}SantoshCV.pdf`}
              download="SantoshCV.pdf"
              className="bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-800/30 dark:hover:bg-yellow-800/50 p-3 md:p-2 rounded text-center transition-colors border border-yellow-300 dark:border-yellow-600/30 min-h-[60px] md:min-h-0 flex flex-col items-center justify-center"
            >
              <div className="text-yellow-600 dark:text-yellow-400 text-lg md:text-base">📄</div>
              <div className="text-yellow-700 dark:text-yellow-300 text-xs mt-1">Resume</div>
            </a>
          </div>
        </div>
      </div>

      {/* Santosh's Impact Metrics */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 p-3 md:p-4 rounded-lg border border-blue-400 dark:border-blue-500/30">
        <div className="text-blue-700 dark:text-blue-300 text-xs mb-3 flex items-center gap-2">
          <span>🏆</span>
          <span className="font-semibold">SANTOSH'S PRODUCTION IMPACT</span>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          <div className="bg-white dark:bg-gray-800/50 p-2 md:p-3 rounded text-center border border-gray-200 dark:border-transparent">
            <div className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400">60%</div>
            <div className="text-xs text-gray-700 dark:text-gray-300">Onboarding Boost</div>
            <div className="text-xs text-gray-500 hidden md:block">Partner Portal</div>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-2 md:p-3 rounded text-center border border-gray-200 dark:border-transparent">
            <div className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400">23s→1s</div>
            <div className="text-xs text-gray-700 dark:text-gray-300">Frontend Virtualization</div>
            <div className="text-xs text-gray-500 hidden md:block">Performance Boost</div>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-2 md:p-3 rounded text-center border border-gray-200 dark:border-transparent">
            <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">Event</div>
            <div className="text-xs text-gray-700 dark:text-gray-300">Driven Arch</div>
            <div className="text-xs text-gray-500 hidden md:block">AWS ECS Spot/Fargate</div>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-2 md:p-3 rounded text-center border border-gray-200 dark:border-transparent">
            <div className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400">99.9%</div>
            <div className="text-xs text-gray-700 dark:text-gray-300">Uptime</div>
            <div className="text-xs text-gray-500 hidden md:block">High Availability</div>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-2 md:p-3 rounded text-center border border-gray-200 dark:border-transparent">
            <div className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400">PCI</div>
            <div className="text-xs text-gray-700 dark:text-gray-300">Compliant</div>
            <div className="text-xs text-gray-500 hidden md:block">Secure Payments</div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-300 dark:border-gray-600 text-xs font-mono">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
          <span className="text-gray-600 dark:text-gray-400">SYSTEM STATUS</span>
          <span className="text-green-600 dark:text-green-400 text-xs">ALL SYSTEMS OPERATIONAL</span>
        </div>
        <div className="space-y-1 text-gray-600 dark:text-gray-500 text-xs">
          <div className="flex justify-between">
            <span>Uptime</span>
            <span className="text-green-600 dark:text-green-400">{formatUptime(metrics.uptime)}</span>
          </div>
          <div className="flex justify-between">
            <span>Requests Served</span>
            <span className="text-cyan-600 dark:text-cyan-400">{metrics.requests}</span>
          </div>
          <div className="flex justify-between">
            <span>Performance Score</span>
            <span className="text-yellow-600 dark:text-yellow-400">98/100</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceMetrics