import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            {/* IDE-style error panel */}
            <div className="bg-gray-800 rounded-lg border border-red-500 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-red-600 px-4 py-3 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h1 className="text-xl font-bold">Application Error</h1>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 font-mono text-sm">
                  <div className="text-red-400 mb-2">Error: Something went wrong</div>
                  <div className="text-gray-400">
                    {this.state.error && this.state.error.toString()}
                  </div>
                </div>

                <p className="text-gray-300">
                  Don't worry! This is just a minor glitch. You can try the following:
                </p>

                <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">
                  <li>Refresh the page</li>
                  <li>Clear your browser cache</li>
                  <li>Return to the home page</li>
                  <li>Contact support if the issue persists</li>
                </ul>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={this.handleReset}
                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Return to Home
                  </button>
                  <button
                    onClick={() => window.location.reload()}
                    className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Refresh Page
                  </button>
                </div>

                {/* Debug info (collapsed by default) */}
                {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-gray-400 hover:text-gray-300 text-sm">
                      View Error Details (Development Mode)
                    </summary>
                    <pre className="mt-2 bg-gray-900 p-4 rounded-lg border border-gray-700 text-xs text-red-400 overflow-auto max-h-64">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
