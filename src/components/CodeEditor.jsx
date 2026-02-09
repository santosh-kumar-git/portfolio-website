import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const CodeEditor = ({ children }) => {
  const [terminalLines, setTerminalLines] = useState([])
  const [showCursor, setShowCursor] = useState(true)
  const location = useLocation()

  const getTerminalData = (path) => {
    const fileName = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)

    switch (path) {
      case '/':
        return {
          command: `cat ~/portfolio/${fileName}.md`,
          output: [
            '# Bommepalli Santosh Kumar Reddy - Software Development Engineer II',
            '',
            'Company: Hornblower Group',
            'Role: Full Stack Engineer',
            'Experience: 4+ years',
            'Remote: Available Worldwide',
            '',
            '## Core Technologies',
            '- Backend: Node.js, Express, Microservices',
            '- Cloud: AWS (ECS, SQS, Fargate, S3)',
            '- Frontend: React, TypeScript, Redux',
            '- Database: PostgreSQL, DynamoDB, MongoDB',
            '',
            '## Key Achievements',
            'Frontend: 23s → <1s (Virtualization)',
            'Cloud Cost: Reduced via ECS Spot Fargate',
            'Reliability: 99.9% Uptime',
            'Stack: React, Node.js, AWS',
            '',
            '## Contact',
            'Email: santoshkumar321b@gmail.com',
            'LinkedIn: linkedin.com/in/bommepalli-santosh-kumar-reddy',
            'Location: India'
          ]
        }

      case '/about':
        return {
          command: `cat ~/portfolio/About.md`,
          output: [
            '# Professional Profile',
            '',
            'Name: Bommepalli Santosh Kumar Reddy',
            'Role: Software Development Engineer II',
            'Company: Hornblower Group',
            'Duration: 2023 - Present',
            'Location: India',
            'Education: B.Tech CSE - Lovely Professional University',
            '',
            '## Expertise Areas',
            '✓ Distributed Systems Design',
            '✓ Event-Driven Architecture',
            '✓ AWS Cloud Infrastructure',
            '✓ REST API Development',
            '✓ Payment Gateway Integration',
            '✓ Scalable Microservices',
            '',
            '## Current Focus',
            '- High-Volume Event Processing',
            '- Real-time System Synchronization',
            '- Security & Identity Verification',
            '- Performance Optimization'
          ]
        }

      case '/projects':
        return {
          command: `ls -la ~/projects/syscloud/`,
          output: [
            'total 8',
            'drwxr-xr-x  5 santosh  staff   160 Oct 20 2023 .',
            'drwxr-xr-x  3 santosh  staff    96 Oct 20 2023 ..',
            '',
            '## Active Projects',
            '',
            'Partner Portal/',
            '  Impact: 60% onboarding time reduction',
            '  Tech: React, AWS Lambda, PostgreSQL',
            '  Status: Production',
            '  Users: 200+ partners',
            '',
            'MSP Renewal Portal/',
            '  Impact: 35% manual work reduction',
            '  Tech: React, TypeScript, Node.js',
            '  Status: Production',
            '  Automation: 95%',
            '',
            'React UI Framework/',
            '  Impact: 40% code duplication reduction',
            '  Tech: React, JSON Schema, Webpack→Vite',
            '  Status: Production',
            '  Build Time: 58% faster',
            '',
            'DevOps Portal/',
            '  Impact: Streamlined deployment process',
            '  Tech: React, Docker, CI/CD',
            '  Status: Development'
          ]
        }

      case '/resume':
        return {
          command: `cat ~/resume/experience.txt`,
          output: [
            '# Work Experience',
            '',
            '## Hornblower Group (2023 - Present)',
            'Position: Software Development Engineer II',
            '',
            '### Key Achievements:',
            '',
            '• Designed distributed, event-driven architecture',
            '  - Using Node.js, AWS ECS, SQS, Fargate',
            '  - Improved scalability & fault tolerance',
            '',
            '• Integrated FreedomPay Payment Gateway',
            '  - Enabled Apple Pay & Google Pay support',
            '  - Secured PCI-compliant transactions',
            '',
            '• Improved Application Performance',
            '  - Reduced load time from 23s to <1s',
            '  - Implemented frontend virtualization',
            '',
            '## SysCloud (2021 - 2023)',
            'Position: Software Engineer',
            '',
            '• Built scalable SaaS platform features',
            '• Optimized system performance & APIs',
            '',
            '## Skills',
            'Backend: Node.js, Express, Python',
            'Cloud: AWS (ECS, SQS, S3, Rekognition)',
            'Frontend: React.js, Redux, TypeScript',
            'Database: PostgreSQL, DynamoDB, MongoDB',
            'Tools: Docker, Git, CI/CD',
            '',
            '📄 DOWNLOAD RESUME:',
            '┌─────────────────────────────────────────────┐',
            '│  💾 Download Full Resume (PDF)             │',
            '│  File: SantoshCV.pdf                       │',
            '│  Size: Professional Format                 │',
            '│  URL: /SantoshCV.pdf                       │',
            '└─────────────────────────────────────────────┘',
            '',
            'Type "download resume" to get the PDF file'
          ]
        }

      case '/contact':
        return {
          command: `cat ~/contact/info.txt`,
          output: [
            '# Contact Information',
            '',
            '┌─────────────────────────────────────────────┐',
            '│  🚀 Bommepalli Santosh Kumar Reddy - Ready to Connect  │',
            '│  Software Development Engineer II @ Hornblower Group │',
            '└─────────────────────────────────────────────┘',
            '',
            '📧 DIRECT CONTACT:',
            '   📨 Email: santoshkumar321b@gmail.com',
            '   ⏰ Response time: < 24 hours',
            '   🔗 Click: mailto:santoshkumar321b@gmail.com',
            '',
            '🌐 PROFESSIONAL NETWORKS:',
            '   💼 LinkedIn: linkedin.com/in/bommepalli-santosh-kumar-reddy',
            '   🔗 Message: linkedin.com/in/bommepalli-santosh-kumar-reddy',
            '   💻 GitHub: github.com/santosh-kumar-git',
            '   🔗 View: https://github.com/santosh-kumar-git',
            '   📄 Resume: Available for download',
            '',
            '📍 AVAILABILITY:',
            '   🌍 Remote: Available worldwide',
            '   ✈️  Relocation: Open to opportunities',
            '   📅 Status: Actively seeking new challenges',
            '   ⏰ Response: Within 24 hours',
            '',
            '🎯 WHAT I\'M LOOKING FOR:',
            '   • Full-stack development roles',
            '   • Performance optimization projects',
            '   • React/Node.js focused positions',
            '   • Tech leadership opportunities',
            '   • Innovative startup environments',
            '',
            '💡 EXPERTISE AREAS:',
            '   🔧 React ecosystem & modern frameworks',
            '   ⚡ Build optimization (Webpack → Vite)',
            '   ☁️  AWS cloud architecture',
            '   🤖 AI-assisted development workflows',
            '   📊 Performance monitoring & analytics',
            '',
            '🤝 LET\'S COLLABORATE:',
            '   Ready to discuss how I can contribute to',
            '   your team\'s success and drive technical',
            '   excellence in your next project!',
            '',
            '📞 Schedule a call or send me a message - ',
            '    I\'d love to hear from you!'
          ]
        }

      default:
        return {
          command: `cat ~/portfolio/${fileName}.md`,
          output: [
            `# ${fileName} Page`,
            '',
            'Content loading...',
            '',
            'This section is under development.',
            'Please check back soon!'
          ]
        }
    }
  }

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Terminal typing effect
  useEffect(() => {
    const terminalData = getTerminalData(location.pathname)
    setTerminalLines([])

    let i = 0
    const timer = setInterval(() => {
      if (i === 0) {
        setTerminalLines([terminalData.command])
      } else if (i <= terminalData.output.length) {
        setTerminalLines([
          terminalData.command,
          '',
          ...terminalData.output.slice(0, i)
        ])
      }

      if (i > terminalData.output.length) {
        clearInterval(timer)
      }
      i++
    }, 50)

    return () => clearInterval(timer)
  }, [location.pathname])

  return (
    <div className="h-full bg-white dark:bg-black text-gray-800 dark:text-green-400 font-mono overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-700 dark:text-gray-300 text-sm ml-3">Terminal - Santosh's Portfolio</span>
      </div>

      {/* Terminal Content */}
      <div className="p-6 h-full overflow-auto">
        {/* System Info Header */}
        <div className="mb-4 text-gray-600 dark:text-gray-500">
          <div>Santosh's Portfolio System v1.0</div>
          <div>Copyright (c) {new Date().getFullYear()} Bommepalli Santosh Kumar Reddy. All rights reserved.</div>
          <div className="mt-2">───────────────────────────────────────────────────────</div>
        </div>

        {/* Terminal Output */}
        <div className="space-y-1 text-sm">
          {terminalLines.map((line, index) => (
            <div key={index} className={`${line && line.startsWith('santosh@portfolio:~$') ? 'text-blue-600 dark:text-blue-400' :
              line && line.startsWith('cat ') ? 'text-blue-600 dark:text-blue-400' :
                line && line.startsWith('ls ') ? 'text-blue-600 dark:text-blue-400' :
                  line && line.startsWith('#') ? 'text-orange-600 dark:text-yellow-400 font-bold' :
                    line && line.startsWith('##') ? 'text-cyan-600 dark:text-cyan-400 font-semibold' :
                      line && line.startsWith('###') ? 'text-green-600 dark:text-green-400' :
                        line && line.startsWith('•') ? 'text-green-600 dark:text-green-400' :
                          line && line.startsWith('✓') ? 'text-green-600 dark:text-green-400' :
                            line && line.startsWith('┌') ? 'text-purple-600 dark:text-purple-400' :
                              line && line.startsWith('│') ? 'text-purple-600 dark:text-purple-400' :
                                line && line.startsWith('└') ? 'text-purple-600 dark:text-purple-400' :
                                  line && line.includes('drwxr-xr-x') ? 'text-blue-600 dark:text-blue-400' :
                                    line && line.includes(':') && line.includes('%') ? 'text-orange-600 dark:text-yellow-400' :
                                      'text-gray-700 dark:text-gray-300'
              }`}>
              {line || ''}
              {index === terminalLines.length - 1 && showCursor && (
                <span className="animate-pulse">█</span>
              )}
            </div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 p-2 text-xs">
          <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-4">
              <span>🟢 Online</span>
              <span>Session: {Math.floor(Date.now() / 1000)}s</span>
              <span>Path: ~/{location.pathname === '/' ? 'home' : location.pathname.slice(1)}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>User: santosh</span>
              <span>Shell: bash</span>
              <span>Encoding: UTF-8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeEditor