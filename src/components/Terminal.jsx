import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Terminal = ({ isVisible, onClose }) => {
  const [history, setHistory] = useState([
    'Santosh\'s Portfolio Terminal v1.0',
    'Type "help" for available commands.',
    ''
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef()
  const terminalRef = useRef()
  const navigate = useNavigate()

  const commands = {
    help: () => [
      'Available commands:',
      '  help              - Show this help message',
      '  about             - View Santosh\'s profile information',
      '  skills            - Display technical expertise',
      '  projects          - Browse project portfolio',
      '  experience        - Show work history (Hornblower, SysCloud)',
      '  performance       - View real-time metrics',
      '  contact           - Get contact information',
      '  email             - Open email client to contact Santosh',
      '  linkedin          - Open LinkedIn profile',
      '  download resume   - Download Santosh\'s resume (PDF)',
      '  cd <page>         - Navigate to different pages',
      '  clear             - Clear terminal screen',
      '  exit              - Close terminal',
      ''
    ],

    about: () => [
      '🧑‍💻 Bommepalli Santosh Kumar Reddy - Full Stack Engineer',
      '',
      '🏢 Current: Hornblower Group',
      '📍 Location: India',
      '⏱️  Experience: 4+ years',
      '🎓 Education: B.Tech CSE - Lovely Professional University',
      '',
      '💡 Full Stack Engineer focused on React ecosystem and distributed backends.',
      '   Specialized in frontend performance (Virtualization) and cost-optimized',
      '   cloud architecture (AWS ECS Spot/Fargate).',
      ''
    ],

    skills: () => [
      '🛠️ Technical Skills:',
      '',
      'Backend & Systems:',
      '  • Node.js, Express (Expert)',
      '  • Distributed Systems, Microservices',
      '  • REST APIs, Event-Driven Architecture',
      '',
      'Cloud & Infrastructure (AWS):',
      '  • ECS, Fargate, SQS, S3',
      '  • Rekognition (AI/ML), API Gateway',
      '  • Docker, CI/CD, Containerization',
      '',
      'Database:',
      '  • PostgreSQL, DynamoDB, MongoDB',
      '',
      'Frontend:',
      '  • React.js, Redux, Performance Optimization',
      '  • TypeScript, Virtualization',
      ''
    ],

    projects: () => {
      navigate('/projects')
      return [
        '🚀 Navigating to projects page...',
        '',
        'Key Projects:',
        '',
        '1. Distributed Event-Driven Backend (Hornblower)',
        '   Tech: Node.js, AWS ECS, SQS, Fargate',
        '   Impact: Improved scalability & fault tolerance',
        '',
        '2. FreedomPay & POS Integrations',
        '   Tech: Node.js, Webhooks, Secure Payments',
        '   Impact: Apple Pay/Google Pay support, Real-time sync',
        '',
        '3. Identity Verification System',
        '   Tech: AWS Rekognition, S3, Node.js',
        '   Impact: Secure face recognition & liveness detection',
        ''
      ]
    },

    experience: () => [
      '💼 Work Experience:',
      '',
      '🏢 Hornblower Group (Jul 2023 - Present)',
      '   Role: Software Development Engineer II',
      '   • Designed event-driven backend using Node.js & AWS ECS Spot (Cost Optimization)',
      '   • Integrated FreedomPay & Oracle Symphony POS',
      '   • Boosted performance: 23s → <1s using Frontend Virtualization',
      '',
      '🏢 SysCloud (Sep 2021 - Feb 2023)',
      '   Role: Software Engineer',
      '   • Built scalable backend/frontend for SaaS platform',
      '   • Integrated GraphQL APIs & optimized performance',
      ''
    ],

    performance: () => [
      '📊 Real-time Performance Metrics:',
      '',
      '🚀 Santosh\'s Production Impact:',
      '   • Performance: 23s → <1s (Frontend Virtualization)',
      '   • Cost: Optimized using AWS ECS Spot Fargate',
      '   • Architecture: Event-Driven Microservices',
      '   • Security: AWS Rekognition Identity',
      '',
      '⚡ Current System Status:',
      '   • Load Time: ~0.8s',
      '   • Memory Usage: ~45MB',
      '   • Bundle Size: ~180KB',
      '   • FPS: 60',
      '',
      '🔧 Cloud Infrastructure:',
      '   • AWS ECS & Fargate: Active',
      '   • SQS Async Processing: Online',
      '   • Database: DynamoDB & PostgreSQL',
      ''
    ],

    contact: () => [
      '📧 Contact Information:',
      '',
      '📨 Email: santoshkumar321b@gmail.com',
      '💼 LinkedIn: linkedin.com/in/bommepalli-santosh-kumar-reddy',
      '📞 Phone: +91 8328393737',
      '📍 Location: India',
      '',
      '🔖 Status: Open to new opportunities',
      '💡 Interests: Distributed Systems, Cloud Architecture,',
      '             Backend Engineering, Scalable Solutions',
      ''
    ],

    cd: (args) => {
      const page = args[0]
      const routes = {
        'home': '/',
        'about': '/about',
        'projects': '/projects',
        'resume': '/resume',
        'contact': '/contact'
      }

      if (routes[page]) {
        navigate(routes[page])
        return [`📂 Navigated to /${page}`, '']
      } else {
        return [`❌ Error: Directory '${page}' not found`, 'Available: home, about, projects, resume, contact', '']
      }
    },

    clear: () => {
      setHistory(['Santosh\'s Portfolio Terminal v1.0', 'Type "help" for available commands.', ''])
      return []
    },

    download: (args) => {
      const item = args.join(' ')
      if (item === 'resume') {
        // Trigger download
        const link = document.createElement('a')
        link.href = '/SantoshCV.pdf'
        link.download = 'SantoshCV.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        return [
          '📄 Downloading resume...',
          '',
          '✅ Download started: SantoshCV.pdf',
          '📁 File saved to your Downloads folder',
          '📊 Bommepalli Santosh Kumar Reddy\'s Professional Resume',
          '',
          'Contains:',
          '• Full work experience at Syscloud Technologies',
          '• Technical skills and certifications',
          '• Project achievements and impact metrics',
          '• Contact information and references',
          ''
        ]
      } else {
        return ['❌ Available downloads: resume', 'Usage: download resume', '']
      }
    },

    email: () => {
      window.open('mailto:santoshkumar321b@gmail.com?subject=Opportunity Discussion&body=Hi Santosh,%0D%0A%0D%0AI found your portfolio and would like to discuss...', '_self')
      return [
        '📧 Opening email client...',
        '',
        '✅ Email draft created to: santoshkumar321b@gmail.com',
        '📝 Subject: Opportunity Discussion',
        '⏰ Expected response time: < 24 hours',
        '',
        'If email client didn\'t open, copy this address:',
        'santoshkumar321b@gmail.com',
        ''
      ]
    },

    linkedin: () => {
      window.open('https://www.linkedin.com/in/bommepalli-santosh-kumar-reddy/', '_blank')
      return [
        '💼 Opening LinkedIn profile...',
        '',
        '✅ Redirecting to: linkedin.com/in/bommepalli-santosh-kumar-reddy',
        '📨 Use LinkedIn messaging for quick contact',
        '🔗 Profile includes professional background',
        '🤝 Connect for networking opportunities',
        ''
      ]
    },

    exit: () => {
      onClose()
      return ['👋 Terminal closed. Press Ctrl+` to reopen.']
    }
  }

  const executeCommand = (input) => {
    const trimmedInput = input.trim()
    if (!trimmedInput) return

    setHistory(prev => [...prev, `$ ${trimmedInput}`])

    const [command, ...args] = trimmedInput.split(' ')
    const cmd = commands[command.toLowerCase()]

    if (cmd) {
      const output = cmd(args)
      if (output.length > 0) {
        setHistory(prev => [...prev, ...output])
      }
    } else {
      setHistory(prev => [...prev, `❌ Command not found: ${command}`, 'Type "help" for available commands.', ''])
    }

    setCommandHistory(prev => [trimmedInput, ...prev.slice(0, 49)]) // Keep last 50 commands
    setCurrentInput('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex] || '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex] || '')
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentInput('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // Simple auto-complete for commands
      const availableCommands = Object.keys(commands)
      const matches = availableCommands.filter(cmd => cmd.startsWith(currentInput.toLowerCase()))
      if (matches.length === 1) {
        setCurrentInput(matches[0])
      }
    }
  }

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isVisible])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 dark:bg-black dark:bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg w-full max-w-4xl h-96 flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="bg-gray-200 dark:bg-gray-800 px-4 py-2 border-b border-gray-300 dark:border-gray-700 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={onClose}></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-sm ml-3">Terminal</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm"
          >
            ✕
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="flex-1 p-4 font-mono text-sm text-gray-800 dark:text-green-400 overflow-y-auto bg-white dark:bg-black"
        >
          <div className="space-y-1">
            {history.map((line, index) => (
              <div key={index} className={
                line.startsWith('$') ? 'text-blue-600 dark:text-blue-400' :
                  line.startsWith('❌') ? 'text-red-600 dark:text-red-400' :
                    line.startsWith('✅') ? 'text-green-600 dark:text-green-400' :
                      line.includes('📊') || line.includes('🚀') || line.includes('💼') ? 'text-orange-600 dark:text-yellow-400' :
                        'text-gray-700 dark:text-green-300'
              }>
                {line}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400">$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-gray-800 dark:text-green-400 outline-none ml-1 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Type a command..."
              />
              <div className="w-2 h-4 bg-gray-800 dark:bg-green-400 animate-pulse ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terminal