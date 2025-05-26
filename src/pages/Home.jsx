import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { 
  Shield, Sword, Users, Database, Gamepad2, Network, 
  Zap, Target, Crown, Globe, Settings, Code, Server,
  Cpu, Activity, BarChart3, Layers, ArrowRight, Github,
  Download, BookOpen, Play, CheckCircle, Star, Sparkles
} from 'lucide-react'

const Home = () => {
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll()
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-purple-900/20 to-dark-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 p-6 sm:p-8 glass-card max-w-full">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Shield className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-primary-400 animate-float" />
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">OpenRPG</div>
                </div>
                <span className="text-lg sm:text-xl md:text-2xl text-gray-300">+</span>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Sword className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-purple-400 animate-float" />
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400">Darkdom</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              Engine-Agnostic<br />
              <span className="gradient-text">C# Game Framework</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Complete RPG foundation supporting <span className="text-primary-400 font-semibold">50K+ monsters</span> and 
              <span className="text-primary-400 font-semibold"> 1000+ players per area</span> with hands-free networking 
              architecture that works with any C# game engine.
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto">
              <div className="glass-card p-4 sm:p-6 text-center">
                <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-primary-400 mx-auto mb-3" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">Engine Agnostic</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Unity, MonoGame, Godot, Custom</p>
              </div>
              <div className="glass-card p-4 sm:p-6 text-center">
                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">Massive Scale</h3>
                <p className="text-gray-400 text-xs sm:text-sm">1000+ players, 50K+ entities</p>
              </div>
              <div className="glass-card p-4 sm:p-6 text-center sm:col-span-2 md:col-span-1">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">Battle-Tested</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Production-ready framework</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-primary-500/25">
                <Play className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Get Started</span>
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-600 hover:border-gray-500 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 flex items-center justify-center space-x-2">
                <Github className="w-4 sm:w-5 h-4 sm:h-5" />
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
                <li>• Multiple damage types (Physical, Magical, Mixed)</li>
                <li>• Advanced hit/damage calculation</li>
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
          </div>
        </div>
      </section>      
	  
	  {/* Additional Core Systems */}
      <section className="py-8 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
        </div>
      </section>      
	  
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
              <Link to="/documentation" className="block w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-colors">
                Unity Quick Start
              </Link>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Other Engines</h3>
              <p className="text-gray-300 mb-6">MonoGame, Godot, or custom C# engine integration</p>
              <Link to="/documentation" className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">
                Engine Integration
              </Link>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Server Setup</h3>
              <p className="text-gray-300 mb-6">Deploy dedicated servers for multiplayer</p>
              <Link to="/documentation" className="block w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Server Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home