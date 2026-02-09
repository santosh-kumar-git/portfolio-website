import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FileExplorer = ({ isVisible, onClose }) => {
  const [expandedFolders, setExpandedFolders] = useState(['portfolio', 'src', 'components'])
  const navigate = useNavigate()

  const fileStructure = {
    portfolio: {
      type: 'folder',
      children: {
        'README.md': { type: 'file', route: '/', icon: '📄' },
        src: {
          type: 'folder',
          children: {
            components: {
              type: 'folder',
              children: {
                'Home.jsx': { type: 'file', route: '/', icon: '🏠' },
                'About.jsx': { type: 'file', route: '/about', icon: '👨‍💻' },
                'Projects.jsx': { type: 'file', route: '/projects', icon: '🚀' },
                'Resume.jsx': { type: 'file', route: '/resume', icon: '📄' },
                'Contact.jsx': { type: 'file', route: '/contact', icon: '📧' }
              }
            },
            data: {
              type: 'folder',
              children: {
                'projects.js': { type: 'file', route: '/projects', icon: '🗂️' },
                'experience.js': { type: 'file', route: '/resume', icon: '💼' },
                'skills.js': { type: 'file', route: '/about', icon: '🛠️' }
              }
            },
            assets: {
              type: 'folder',
              children: {
                'profile.jpg': { type: 'file', icon: '🖼️' },
                'resume.pdf': { type: 'file', route: '/resume', icon: '📋' }
              }
            }
          }
        },
        docs: {
          type: 'folder',
          children: {
            'ACHIEVEMENTS.md': { type: 'file', route: '/about', icon: '🏆' },
            'PROJECTS.md': { type: 'file', route: '/projects', icon: '📋' },
            'CONTACT.md': { type: 'file', route: '/contact', icon: '📞' }
          }
        },
        '.github': {
          type: 'folder',
          children: {
            workflows: {
              type: 'folder',
              children: {
                'deploy.yml': { type: 'file', icon: '⚙️' }
              }
            }
          }
        }
      }
    }
  }

  const toggleFolder = (path) => {
    setExpandedFolders(prev =>
      prev.includes(path)
        ? prev.filter(p => p !== path)
        : [...prev, path]
    )
  }

  const handleFileClick = (file) => {
    if (file.route) {
      navigate(file.route)
      onClose()
    }
  }

  const renderTree = (structure, path = '') => {
    return Object.entries(structure).map(([name, item]) => {
      const currentPath = path ? `${path}/${name}` : name
      const isExpanded = expandedFolders.includes(currentPath)

      if (item.type === 'folder') {
        return (
          <div key={currentPath}>
            <div
              className="flex items-center gap-1 px-2 py-1 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleFolder(currentPath)}
            >
              <span className="text-yellow-400">
                {isExpanded ? '📂' : '📁'}
              </span>
              <span className="text-blue-400 text-sm">{name}</span>
            </div>
            {isExpanded && item.children && (
              <div className="ml-4 border-l border-gray-600">
                {renderTree(item.children, currentPath)}
              </div>
            )}
          </div>
        )
      } else {
        return (
          <div
            key={currentPath}
            className="flex items-center gap-1 px-2 py-1 hover:bg-gray-700 cursor-pointer text-sm"
            onClick={() => handleFileClick(item)}
          >
            <span>{item.icon || '📄'}</span>
            <span className={`${item.route ? 'text-green-400 hover:text-green-300' : 'text-gray-300'}`}>
              {name}
            </span>
            {item.route && (
              <span className="text-xs text-gray-500 ml-auto">→</span>
            )}
          </div>
        )
      }
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-start z-50" onClick={onClose}>
      <div
        className="bg-gray-900 border border-gray-700 rounded-lg w-80 h-96 mt-20 ml-4 flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* File Explorer Header */}
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-blue-400">📁</span>
            <span className="text-gray-300 text-sm">File Explorer</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-sm"
          >
            ✕
          </button>
        </div>

        {/* Breadcrumb */}
        <div className="bg-gray-800 px-4 py-1 border-b border-gray-700 text-xs text-gray-400">
          📂 /portfolio
        </div>

        {/* File Tree */}
        <div className="flex-1 p-2 overflow-y-auto">
          <div className="space-y-1">
            {renderTree(fileStructure)}
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-800 px-4 py-1 border-t border-gray-700 rounded-b-lg text-xs text-gray-500">
          <div className="flex justify-between">
            <span>Santosh's Portfolio</span>
            <span>Click files to navigate</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileExplorer