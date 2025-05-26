import React, { useState, useEffect } from 'react'
import { 
  Shield, Sword, Users, Database, Gamepad2, Network, 
  Zap, Target, Crown, Globe, Settings, Code, Server,
  Cpu, Activity, BarChart3, Layers, ArrowRight, Github,
  Download, BookOpen, Play, CheckCircle, Star, Sparkles
} from 'lucide-react'

const App = () => {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'openrpg', 'darkdom', 'performance', 'code', 'getting-started']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Trigger Prism.js syntax highlighting
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll()
    }
  }, [])

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold gradient-text">OpenRPG</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'hero', label: 'Overview' },
                { id: 'openrpg', label: 'OpenRPG Core' },
                { id: 'darkdom', label: 'Darkdom' },
                { id: 'performance', label: 'Performance' },
                { id: 'code', label: 'Code Examples' },
                { id: 'getting-started', label: 'Get Started' }
              ].map(item => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-primary-400 border-b-2 border-primary-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-purple-900/20 to-dark-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="mb-8 flex justify-center">
              <div className="flex items-center space-x-4 p-3 glass-card">
                <Shield className="w-12 h-12 text-primary-400 animate-float" />
                <div className="text-4xl font-bold gradient-text">OpenRPG</div>
                <span className="text-lg text-gray-300">+</span>
                <Sword className="w-12 h-12 text-purple-400 animate-float" />
                <div className="text-4xl font-bold text-purple-400">Darkdom</div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Engine-Agnostic<br />
              <span className="gradient-text">C# Game Framework</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Complete RPG foundation supporting <span className="text-primary-400 font-semibold">50K+ monsters</span> and 
              <span className="text-primary-400 font-semibold"> 1000+ players per area</span> with hands-free networking 
              architecture that works with any C# game engine.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="glass-card p-6 text-center">
                <Globe className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Engine Agnostic</h3>
                <p className="text-gray-400 text-sm">Unity, MonoGame, Godot, Custom</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Massive Scale</h3>
                <p className="text-gray-400 text-sm">1000+ players, 50K+ entities</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Battle-Tested</h3>
                <p className="text-gray-400 text-sm">Production-ready framework</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-primary-500/25">
                <Play className="w-5 h-5" />
                <span>Get Started</span>
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OpenRPG Core Framework Section */}
      <section id="openrpg" className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-primary-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              OpenRPG <span className="gradient-text">Core Framework</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engine-agnostic C# foundation providing complete RPG systems that integrate 
              with any game engine or framework.
            </p>
          </div>

          {/* Core Systems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="feature-card">
              <Users className="w-12 h-12 text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Player Management</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Multi-class system (Warrior, Archer, extensible)</li>
                <li>• Level-based progression with experience</li>
                <li>• Comprehensive stat system (STR, INT, HP, MP, etc.)</li>
                <li>• Player states (Moving, Combat, Casting, Dead)</li>
              </ul>
            </div>

            <div className="feature-card">
              <Sword className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Combat System</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
			    <li>• Action & Target Combat</li>
                <li>• Multiple damage types (Physical, Magical, Mixed)</li>
                <li>• Status effects (Buffs, Debuffs, DOT)</li>
                <li>• Negative statuses (Stun, Blind, Freeze, etc.)</li>
              </ul>
            </div>

            <div className="feature-card">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Skill & Spell System</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Projectile spells with trajectory</li>
                <li>• Instant cast & Area of Effect abilities</li>
                <li>• Hierarchical skill trees</li>
                <li>• Active/Passive skill roles</li>
              </ul>
            </div>

            <div className="feature-card">
              <Target className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Monster AI System</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Multiple types (Peaceful, Aggressive, Boss, Unique)</li>
                <li>• Advanced AI behaviors (Wandering, Chasing)</li>
                <li>• Dynamic spawn management</li>
                <li>• State-based AI system</li>
              </ul>
            </div>

            <div className="feature-card">
              <BookOpen className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quest System</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Quest types (One-time, Repeatable, Event)</li>
                <li>• Multiple objectives (Collect, Kill, Enter areas)</li>
                <li>• Dynamic quest progression</li>
                <li>• Custom script support</li>
              </ul>
            </div>

            <div className="feature-card">
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Inventory & Items</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• List-based and Grid-based layouts</li>
                <li>• 11 equipment slots with bonuses</li>
                <li>• Item tiers (Normal, Rare, Legendary)</li>
                <li>• Magic options and enchantments</li>
              </ul>
            </div>
          </div>

          {/* World & Social Systems */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="feature-card">
              <Globe className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">World & Environment</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Multiple interconnected game areas</li>
                <li>• Instance types (Towns, Dungeons, Private, Combat)</li>
                <li>• Teleportation and warp systems</li>
                <li>• Dynamic object spawning and lifecycle</li>
                <li>• Physics-based collision detection</li>
              </ul>
            </div>

            <div className="feature-card">
              <Users className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Social Systems</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Party system (Quest & Hunt parties)</li>
                <li>• Guild system with hierarchies</li>
                <li>• Configurable loot distribution</li>
                <li>• Real-time chat with color coding</li>
                <li>• Permission-based member management</li>
              </ul>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <span className="gradient-text">Technical Architecture</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Layers className="w-10 h-10 text-primary-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Modular Design</h4>
                <p className="text-gray-400 text-sm">Plugin-based component architecture with extensive interfaces</p>
              </div>
              <div className="text-center">
                <Activity className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Event System</h4>
                <p className="text-gray-400 text-sm">Comprehensive game action and event handling</p>
              </div>
              <div className="text-center">
                <Settings className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Utilities</h4>
                <p className="text-gray-400 text-sm">Math utilities, pathfinding, logging, and specialized collections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Darkdom Framework Section */}
      <section id="darkdom" className="py-20 bg-gradient-to-br from-purple-900/20 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sword className="w-16 h-16 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Darkdom <span className="text-purple-400">Framework</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced extensions for faction-based PvP gaming with professional Unity integration 
              and sophisticated UI framework.
            </p>
          </div>

          {/* Faction System Highlight */}
          <div className="glass-card p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <Crown className="w-8 h-8 inline mr-3 text-yellow-400" />
              Three-Faction PvP System
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-red-900/30 rounded-lg border border-red-500/30">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">D</span>
                </div>
                <h4 className="text-xl font-semibold text-red-400 mb-2">Dark Faction</h4>
                <p className="text-gray-300 text-sm">Aggressive faction focused on conquest and power</p>
              </div>
              <div className="text-center p-6 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">L</span>
                </div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Light Faction</h4>
                <p className="text-gray-300 text-sm">Noble faction dedicated to protection and justice</p>
              </div>
              <div className="text-center p-6 bg-gray-900/30 rounded-lg border border-gray-500/30">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">N</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-400 mb-2">Neutral Faction</h4>
                <p className="text-gray-300 text-sm">Balanced faction open to all players</p>
              </div>
            </div>
          </div>

          {/* DarkdomUI Highlight */}
          <div className="glass-card p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              <Code className="w-8 h-8 inline mr-3 text-cyan-400" />
              DarkdomUI - Unity Canvas Bridge
            </h3>
            <div className="text-center mb-6">
              <p className="text-lg text-gray-300">
                Revolutionary UI system that converts Unity Canvases to human-readable text format 
                and generates Unity UI components at runtime.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
                <div className="text-2xl mb-2">📄→🎮</div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Text to Unity</h4>
                <p className="text-gray-300 text-sm">Generate Unity Canvases from text files at runtime</p>
              </div>
              <div className="text-center p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <div className="text-2xl mb-2">🎮→📄</div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Unity to Text</h4>
                <p className="text-gray-300 text-sm">Serialize Unity Canvases to version-control friendly format</p>
              </div>
              <div className="text-center p-4 bg-green-900/30 rounded-lg border border-green-500/30">
                <div className="text-2xl mb-2">🔄</div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Hot Reload</h4>
                <p className="text-gray-300 text-sm">Update UI instantly without restarting the game</p>
              </div>
            </div>
          </div>

          {/* Darkdom Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card">
              <Shield className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Faction-Based PvP</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Automatic friend/foe recognition</li>
                <li>• Faction-specific interaction rules</li>
                <li>• PvP combat management</li>
                <li>• Faction-based spell targeting</li>
              </ul>
            </div>

            <div className="feature-card">
              <Target className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Enhanced Monster System</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Configurable kill reward systems</li>
                <li>• Advanced death components</li>
                <li>• Multiple reward distribution methods</li>
                <li>• Event-driven monster observers</li>
              </ul>
            </div>

            <div className="feature-card">
              <Gamepad2 className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Unity Integration</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Bootstrap initialization system</li>
                <li>• Real-time world synchronization</li>
                <li>• Unity Canvas serialization/generation</li>
                <li>• DarkdomUI text-based UI format</li>
                <li>• Hot-reload UI capabilities</li>
                <li>• Unified input management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

          {/* DarkdomUI Framework - Enhanced Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold mb-4">
                <span className="text-purple-400">DarkdomUI</span> - Advanced UI Framework
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Revolutionary UI system that bridges Unity and text-based UI development with 
                real-time serialization and generation capabilities.
              </p>
            </div>

             <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="feature-card">
                <Code className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Unity Canvas Serialization</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Convert Unity Canvases to text format</li>
                  <li>• Preserve all UI properties and hierarchy</li>
                  <li>• Version control friendly format</li>
                  <li>• Cross-project UI sharing</li>
                </ul>
              </div>

              <div className="feature-card">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Real-Time Generation</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Generate Unity Canvases at runtime</li>
                  <li>• Dynamic UI creation from text files</li>
                  <li>• Hot-reload UI changes instantly</li>
                  <li>• No Unity Editor required for UI updates</li>
                </ul>
              </div>

              <div className="feature-card">
                <Settings className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Tools</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Visual UI editor application</li>
                  <li>• Template system for reusable UIs</li>
                  <li>• Batch conversion tools</li>
                  <li>• Integration with version control</li>
                </ul>
              </div>
            </div>

          </div>

      {/* Performance Section */}
      <section id="performance" className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Performance & Scale</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for massive multiplayer experiences with hands-free networking 
              architecture that simulates gameplay identically on server and client.
            </p>
          </div>

          {/* Performance Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">50,000+</div>
              <div className="text-lg font-semibold mb-2">Monsters</div>
              <div className="text-gray-400">Real-time AI simulation</div>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">1,000+</div>
              <div className="text-lg font-semibold mb-2">Players per Area</div>
              <div className="text-gray-400">Low latency networking</div>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">&lt; 50ms</div>
              <div className="text-lg font-semibold mb-2">Response Time</div>
              <div className="text-gray-400">Optimized action processing</div>
            </div>
          </div>

          {/* Networking Architecture */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-green-900/10 pointer-events-none"></div>
            <div className="relative glass-card p-8 backdrop-blur-lg">
              <h3 className="text-3xl font-bold mb-10 text-center">
                <Network className="w-10 h-10 inline mr-3 text-primary-400 animate-pulse" />
                Hands-Free Networking Architecture
              </h3>
              
              <div className="grid md:grid-cols-2 gap-10">
                {/* Server-Side Simulation */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-dark-800 rounded-lg p-6">
                    <div className="flex items-center mb-6">
                      <Server className="w-8 h-8 text-primary-400 mr-3" />
                      <h4 className="text-xl font-bold text-primary-400">Server-Side Simulation</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Cpu className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-200 font-medium">Identical Logic</p>
                          <p className="text-gray-400 text-sm">Server and client run same gameplay code</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-200 font-medium">Authoritative Server</p>
                          <p className="text-gray-400 text-sm">Client prediction with server validation</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Zap className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-200 font-medium">Real-time AI</p>
                          <p className="text-gray-400 text-sm">Process thousands of entities simultaneously</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Activity className="w-5 h-5 text-primary-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-200 font-medium">Optimized Processing</p>
                          <p className="text-gray-400 text-sm">Advanced action queuing system</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Multi-Server Architecture */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-dark-800 rounded-lg p-6">
                    <div className="flex items-center mb-6">
                      <Layers className="w-8 h-8 text-green-400 mr-3" />
                      <h4 className="text-xl font-bold text-green-400">Multi-Server Architecture</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Globe className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-200 font-medium">Dedicated Servers</p>
                          <p className="text-gray-400 text-sm">Separate Login and World servers</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Database className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-200 font-medium">Database Clustering</p>
                          <p className="text-gray-400 text-sm">Optimized data distribution</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Network className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-200 font-medium">IPC Communication</p>
                          <p className="text-gray-400 text-sm">Server coordination protocols</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <BarChart3 className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-200 font-medium">Auto-Scaling</p>
                          <p className="text-gray-400 text-sm">Dynamic load balancing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section id="code" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Code Examples</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how easy it is to create powerful RPG systems with clean, 
              extensible code that works with any C# game engine.
            </p>
          </div>

          
        </div>
      </section>

      {/* Code Examples Section */}
      <section id="code" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Code Examples</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real examples from the OpenRPG and Darkdom frameworks showing the power 
              and simplicity of the architecture.
            </p>
          </div>

          {/* Code Examples Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-400">🎯 World Instance Management</h3>
              <div className="code-block">
                <pre><code className="language-csharp">{`// Real-time action processing and area broadcasting
public class DarkdomWorldInstance : OpenRPGBetterInstance
{
    private ConcurrentQueue<IGameAction> PendingGameActions { get; }
    public Dictionary<int, Queue<IGameAction>> AreaGameActionQueue;

    public override void RequestAction(IObject obj, IGameAction action)
    {
        // Immediate action processing for responsive gameplay
        PerformEvent(action);
    }

    public void PerformEvent(IGameAction action)
    {
        // Determine target area for the action
        var targetAreaId = action.TargetAreaId <= 0 
            ? action.GameObject.AreaId 
            : action.TargetAreaId;
            
        var area = WorldMap.GetArea(targetAreaId);
        
        // Broadcast action to all players in the area
        area?.BroadCastDynamicAction(action, action.Targets);
        
        // Set instance context and fire event
        action.InstanceId = InstanceId;
        InvokeOnAction(action.GameObject, action);
    }
}`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">⚔️ Component-Based Monster Rewards</h3>
              <div className="code-block">
                <pre><code className="language-csharp">{`// Automatic reward distribution using component system
public class DarkdomMonsterDeathRewardComponent : BGameComponent
{
    private SRefMonster _monsterReferenceData;
    public new DarkdomMonster GameObject { get; set; }

    public override void OnSpawn(IObject entity)
    {
        GameObject = (DarkdomMonster)entity;
        _monsterReferenceData = RefMonsters.GetMonsterRef(GameObject.Id);
        GameObject.StateChanged += ObjectStateChanged;
    }

    private void ObjectStateChanged(IObject obj, E_ObjectState prevState, E_ObjectState state)
    {
        if (state == E_ObjectState.Dead)
        {
            RewardKiller();
        }
    }

    private void RewardKiller()
    {
        // Determine killer based on kill type configuration
        var killer = GameObject.KillType == E_MonsterKillType.HighestDamage
            ? GameObject.GetHighestDamage()
            : GameObject.GetLastHit();

        var killerObject = GameObject.GetMap()
            .ObjectFromArea(killer.Dealer, GameObject.AreaId);

        // Delegate to reward handler for flexible reward systems
        GameObject.RewardHandler?.RewardKiller(killer, killerObject);
    }
}`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">🏃 WASD Movement System</h3>
              <div className="code-block">
                <pre><code className="language-csharp">{`// Real-time movement with collision detection and validation
public class DarkdomWASDMovementComponent : BGameComponent, IMovementComponent
{
    public SVector3 MovementDirection { get; set; }
    public IOpenRPGMapTile CurrentTile { get; set; }

    public void Move(SVector3 to, SVector3 rotation, E_MovementControls movementControls)
    {
        if (!IsInMovementState() || rotation == SVector3.Empty)
        {
            Stop();
            return;
        }

        MovementDirection = rotation;
        GameObject.Movement.SetTargetPosition(to);
        GameObject.Movement.SetRotation(rotation);
    }

    internal void MoveObject(float time)
    {
        var currentPos = GameObject.Movement.Position;
        var movementSpeed = GameObject.Movement.Speed;
        var deltaMove = movementSpeed * time;

        // Calculate new position based on direction and speed
        var incX = MovementDirection.X * deltaMove;
        var incZ = MovementDirection.Z * deltaMove;
        var newPos = SVector3.Create(currentPos.X + incX, 0, currentPos.Z + incZ);

        // Validate tile movement
        var tile = GameObject.WorldMap.TileMap.GetTile(newPos.X, newPos.Z);
        if (tile == null || !tile.CanEnter() || tile.Obstacle || tile.Occupied)
        {
            GameObject.StopMoving();
            return;
        }

        // Update position and tile tracking
        CurrentTile = tile;
        GameObject.CurrentTile = tile;
        GameObject.Movement.SetPosition(newPos);
        GameObject.MovementTick(newPos, MovementDirection);
    }
}`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">👑 Faction-Based Player System</h3>
              <div className="code-block">
                <pre><code className="language-csharp">{`// Faction-aware player with automatic PvP management
public class DarkdomPlayer : OpenRPGDefaultPlayer, IDarkdomObject
{
    public E_ObjectFaction ObjectFaction { get; set; }
    public DarkdomPlayerPVPManager PVPComponent { get; set; }
    public DarkdomSkillBarConfiguration[] SkillBarConfiguration;

    public override void InitializeComponents()
    {
        base.InitializeComponents();
        PVPComponent = new DarkdomPlayerPVPManager();
    }

    public override bool CanInteractWith(IObject obj)
    {
        // Faction-based interaction rules
        return obj is IDarkdomObject gameObject && 
               gameObject.ObjectFaction == this.ObjectFaction || 
               obj.ObjectType == E_ObjectType.NPC;
    }

    public override bool CanCastOn(IObject obj, int skillId)
    {
        if (!(obj is IDarkdomObject gameObject)) return false;
        
        var skillInfo = RefSkills.GetSkillRef(skillId);
        
        // Allow casting on same faction or hostile spells on different factions
        if (obj.ObjectType == E_ObjectType.Monster || 
            gameObject.ObjectFaction == E_ObjectFaction.Neutral) return true;
            
        if (obj.UniqueId == this.UniqueId && 
            skillInfo.SkillType != E_SkillType.Dash) return true;
            
        return gameObject.ObjectFaction == ObjectFaction || 
               skillInfo.SkillType != E_SkillType.Buff;
    }

    public override void ReSpawned()
    {
        base.ReSpawned();
        
        // Restore half health and mana on respawn
        var health = GetStat(E_Stat.Health).MaxValue / 2;
        var mana = GetStat(E_Stat.Mana).MaxValue / 2;
        UpdateStat(E_Stat.Health, health);
        UpdateStat(E_Stat.Mana, mana);
    }
}`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-20 bg-gradient-to-br from-primary-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Get Started</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start building your RPG game with OpenRPG and Darkdom in minutes, 
              not months. Choose your setup path below.
            </p>
          </div>

          {/* Setup Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Unity Developer</h3>
              <p className="text-gray-300 mb-6">Complete Unity integration with Darkdom extensions</p>
              <button className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-colors">
                Unity Quick Start
              </button>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Other Engines</h3>
              <p className="text-gray-300 mb-6">MonoGame, Godot, or custom C# engine integration</p>
              <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">
                Engine Integration
              </button>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Server Setup</h3>
              <p className="text-gray-300 mb-6">Deploy dedicated servers for multiplayer</p>
              <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Server Guide
              </button>
            </div>
          </div>

          {/* Quick Steps */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Quick Setup Steps</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Download", desc: "Get OpenRPG Core + Darkdom", icon: Download },
                { step: 2, title: "Setup Database", desc: "Configure SQL connection", icon: Database },
                { step: 3, title: "Initialize", desc: "Bootstrap your game engine", icon: Settings },
                { step: 4, title: "Create", desc: "Build your RPG world", icon: Sparkles }
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-semibold mb-2">{item.step}. {item.title}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-6">Ready to Build the Next Great RPG?</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-2 shadow-lg">
                <Download className="w-5 h-5" />
                <span>Download Now</span>
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Documentation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-dark-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-primary-500 mr-3" />
            <span className="text-xl font-bold gradient-text">OpenRPG Framework</span>
          </div>
          <p className="text-gray-400 mb-6">
            Engine-agnostic C# framework for creating multiplayer RPG games
          </p>
          <div className="flex items-center justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Download className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
