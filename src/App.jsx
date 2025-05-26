import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Shield, Github, Twitter, MessageSquare, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Showcase from './pages/Showcase'

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <Link to="/" className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-primary-500" />
                  <span className="text-xl font-bold gradient-text">OpenRPG</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/documentation" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Documentation
                </Link>
                <Link to="/showcase" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Showcase
                </Link>
                
                <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-700">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Mobile menu panel */}
              <div className="absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-md border-b border-gray-800 z-50 md:hidden">
                <div className="px-4 py-3 space-y-1">
                  <Link 
                    to="/" 
                    className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/documentation" 
                    className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link 
                    to="/showcase" 
                    className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Showcase
                  </Link>
                  
                  {/* Social links in mobile */}
                  <div className="flex items-center space-x-4 px-3 py-3 border-t border-gray-700 mt-2">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-dark-800 border-t border-gray-700 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="sm:col-span-2 md:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-500" />
                  <span className="text-xl font-bold gradient-text">OpenRPG</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Engine-agnostic C# framework for creating multiplayer RPG games
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-200">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/documentation" className="text-gray-400 hover:text-white">Documentation</Link></li>
                  <li><Link to="/showcase" className="text-gray-400 hover:text-white">Showcase</Link></li>
                  <li><a href="#download" className="text-gray-400 hover:text-white">Download</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-200">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-400 hover:text-white">Examples</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-200">Community</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/" className="text-gray-400 hover:text-white">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/" className="text-gray-400 hover:text-white">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://discord.gg/" className="text-gray-400 hover:text-white">
                    <MessageSquare className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
              <p>&copy; 2025 OpenRPG Framework. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App