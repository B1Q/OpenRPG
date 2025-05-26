import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, Code, Server, Gamepad2, Shield, Sword, 
  ChevronRight, Search, ExternalLink, Copy, CheckCircle,
  Layers, Database, Network, Users, Zap, Target, 
  Settings, Terminal, Cpu, Globe, Package, Menu, X,
  Heart, Swords, Star, Crown, Lock, Unlock, Eye,
  MonitorSpeaker, Brain, Boxes, Workflow
} from 'lucide-react'

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sidebarSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      subsections: ['Overview', 'Installation', 'First Project']
    },
    {
      id: 'unity-integration',
      title: 'Unity Integration',
      icon: Gamepad2,
      subsections: ['Setup', 'Bootstrap', 'DarkdomUI', 'Examples']
    },
    {
      id: 'other-engines',
      title: 'Other Engines',
      icon: Code,
      subsections: ['MonoGame', 'Godot', 'Custom Engine']
    },
    {
      id: 'openrpg-core',
      title: 'OpenRPG Core Systems',
      icon: Shield,
      subsections: ['Player Management', 'Combat System', 'Skills & Spells', 'Monster AI', 'Quests', 'Inventory & Items', 'World Management', 'Social Systems']
    },
    {
      id: 'darkdom-extensions',
      title: 'Darkdom Extensions',
      icon: Sword,
      subsections: ['Faction PvP', 'Enhanced Monsters', 'Unity Integration', 'UI Framework', 'Enhanced Systems']
    },
    {
      id: 'development-tools',
      title: 'Development Tools',
      icon: Settings,
      subsections: ['Database Management', 'Editor Tools', 'Testing Framework']
    },
    {
      id: 'deployment',
      title: 'Deployment & Architecture',
      icon: Server,
      subsections: ['System Architecture', 'Requirements', 'Scaling', 'Monitoring']
    }
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Section Navigation */}
        <div className="lg:hidden mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">Documentation Section:</label>
          <select
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value)}
            className="w-full bg-dark-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary-500"
          >
            {sidebarSections.map(section => (
              <option key={section.id} value={section.id}>
                {section.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold mb-4 gradient-text">Documentation</h2>
              <nav className="space-y-2">
                {sidebarSections.map(section => (
                  <div key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                        activeSection === section.id
                          ? 'bg-primary-600/20 text-primary-400 border-l-4 border-primary-400'
                          : 'hover:bg-gray-800 text-gray-300'
                      }`}
                    >
                      <section.icon className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
                    </button>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 w-full min-w-0">
            <div className="max-w-full overflow-x-auto">
              {activeSection === 'getting-started' && <GettingStarted copyToClipboard={copyToClipboard} copied={copied} />}
              {activeSection === 'unity-integration' && <UnityIntegration copyToClipboard={copyToClipboard} copied={copied} />}
              {activeSection === 'other-engines' && <OtherEngines copyToClipboard={copyToClipboard} copied={copied} />}
              {activeSection === 'openrpg-core' && <OpenRPGCore />}
              {activeSection === 'darkdom-extensions' && <DarkdomExtensions />}
              {activeSection === 'development-tools' && <DevelopmentTools />}
              {activeSection === 'deployment' && <DeploymentArchitecture />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

// Getting Started Component
const GettingStarted = ({ copyToClipboard, copied }) => (
  <div className="prose prose-invert w-full max-w-none">
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Getting Started with OpenRPG & Darkdom</h1>
      
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400">Framework Architecture</h2>
        <div className="relative overflow-hidden">
          <svg className="w-full h-96 bg-dark-800 rounded-lg p-4" viewBox="0 0 600 380">
            {/* Any C# Game Engine */}
            <rect x="150" y="20" width="300" height="60" rx="8" fill="#6366F1" stroke="#818CF8" strokeWidth="2"/>
            <text x="300" y="40" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Any C# Game Engine</text>
            <text x="300" y="58" textAnchor="middle" fill="#C7D2FE" fontSize="11">(Unity, MonoGame, Godot, Custom)</text>
            
            {/* Darkdom Framework - Optional Extension */}
            <rect x="50" y="120" width="200" height="60" rx="8" fill="#8B5CF6" stroke="#A78BFA" strokeWidth="2"/>
            <text x="150" y="140" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Darkdom Framework</text>
            <text x="150" y="158" textAnchor="middle" fill="#DDD6FE" fontSize="10">(Optional PvP Extension)</text>
            
            {/* OpenRPG Core Framework */}
            <rect x="150" y="220" width="300" height="60" rx="8" fill="#059669" stroke="#10B981" strokeWidth="2"/>
            <text x="300" y="240" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">OpenRPG Core Framework</text>
            <text x="300" y="258" textAnchor="middle" fill="#A7F3D0" fontSize="11">(Engine-Agnostic RPG Foundation)</text>
            
            {/* Network Services */}
            <rect x="150" y="320" width="300" height="60" rx="8" fill="#DC2626" stroke="#EF4444" strokeWidth="2"/>
            <text x="300" y="340" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Network Services</text>
            <text x="300" y="358" textAnchor="middle" fill="#FECACA" fontSize="11">(Multiplayer Backend + Database)</text>
            
            {/* Direct connection from Engine to OpenRPG */}
            <line x1="300" y1="80" x2="300" y2="220" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
            <text x="320" y="150" fill="#9CA3AF" fontSize="10">integrates with</text>
            
            {/* Optional connection through Darkdom */}
            <line x1="250" y1="80" x2="150" y2="120" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead2)"/>
            <text x="180" y="105" fill="#8B5CF6" fontSize="9">optional</text>
            
            <line x1="150" y1="180" x2="250" y2="220" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead2)"/>
            <text x="170" y="205" fill="#8B5CF6" fontSize="9">extends</text>
            
            {/* OpenRPG to Network Services */}
            <line x1="300" y1="280" x2="300" y2="320" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
            <text x="320" y="305" fill="#9CA3AF" fontSize="10">connects to</text>
            
            {/* Arrow marker definition */}
            <defs>
              <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF"/>
              </marker>
            </defs>
          </svg>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-400 mb-2">🎮 For Games</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Complete RPG foundation</li>
              <li>• Faction-based PvP system</li>
              <li>• Scalable multiplayer architecture</li>
              <li>• Professional UI framework</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">🛠️ For Developers</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Modular, interface-driven design</li>
              <li>• Rapid development framework</li>
              <li>• Visual editors and tools</li>
              <li>• Hot-reload capabilities</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-400 mb-2">⚙️ For Deployment</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Multi-server architecture</li>
              <li>• Built-in scaling support</li>
              <li>• Professional monitoring</li>
              <li>• Battle-tested components</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400">Installation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Clone the Repositories</h3>
            <div className="bg-gray-900 p-4 rounded-lg relative">
              <code className="text-green-400 text-xs sm:text-sm block break-all">
                git clone https://github.com/B1Q/openrpg.git<br />
                git clone https://github.com/B1Q/darkdom.git
              </code>
              <button
                onClick={() => copyToClipboard('git clone https://github.com/B1Q/openrpg.git\ngit clone https://github.com/B1Q/darkdom.git')}
                className="absolute top-2 right-2 p-2 hover:bg-gray-800 rounded"
              >
                {copied ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Development Workflow</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-dark-800 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-2">Design Phase</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Define mechanics using OpenRPG</li>
                  <li>• Configure faction rules</li>
                  <li>• Design UI layouts</li>
                </ul>
              </div>
              <div className="bg-dark-800 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-2">Implementation</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Extend base classes</li>
                  <li>• Implement faction logic</li>
                  <li>• Create UI controllers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Unity Integration Component
const UnityIntegration = ({ copyToClipboard, copied }) => (
  <div className="prose prose-invert w-full max-w-none">
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Unity Integration Guide</h1>
      
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400">Setup Process</h2>
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
            <div>
              <h3 className="font-semibold mb-2">Import Darkdom Unity Package</h3>
              <p className="text-gray-400 mb-2">Import the DarkdomUnity.unitypackage into your Unity project</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Bootstrap system for automatic initialization</li>
                <li>• World synchronization components</li>
                <li>• Input management system</li>
                <li>• Visual rendering handlers</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
            <div>
              <h3 className="font-semibold mb-2">Configure Bootstrap</h3>
              <div className="bg-gray-900 p-4 rounded-lg relative mt-2">
                <code className="text-green-400 text-xs block break-all">
                  DarkdomBootstrap.Initialize(new UnityBootstrapConfig {'{'}
                  <br />    DatabaseConnection = "your_connection_string",
                  <br />    ServerAddress = "localhost:7777",
                  <br />    EnableLogging = true,
                  <br />    AutoConnect = true
                  <br />{'}'});
                </code>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400">Client Framework Features</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">Core Systems</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Real-time world synchronization</li>
              <li>• Event-driven action handling</li>
              <li>• Dynamic object spawning/despawning</li>
              <li>• State visualization system</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">Rendering & Visual</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Visual effects system</li>
              <li>• Camera management</li>
              <li>• Animation integration</li>
              <li>• Particle system support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400">DarkdomUI System</h2>
        <p className="text-gray-300 mb-4">
          Advanced UI framework allowing text-based UI definitions and runtime generation:
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">Canvas → Text Serialization</h3>
            <code className="text-xs break-all">DarkdomUI.SerializeCanvas(canvas)</code>
            <p className="text-xs text-gray-400 mt-2">Convert Unity Canvas to human-readable format</p>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">Text → Canvas Generation</h3>
            <code className="text-xs break-all">DarkdomUI.GenerateCanvas(textFile)</code>
            <p className="text-xs text-gray-400 mt-2">Runtime UI creation from text definitions</p>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-3 text-purple-400">UI Components</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-dark-800 p-3 rounded-lg">
            <h4 className="font-semibold text-yellow-400 text-sm mb-1">Base Elements</h4>
            <p className="text-xs text-gray-400">Canvas, Images, Labels, Buttons</p>
          </div>
          <div className="bg-dark-800 p-3 rounded-lg">
            <h4 className="font-semibold text-pink-400 text-sm mb-1">Interactive</h4>
            <p className="text-xs text-gray-400">Draggable, Hover effects, Events</p>
          </div>
          <div className="bg-dark-800 p-3 rounded-lg">
            <h4 className="font-semibold text-blue-400 text-sm mb-1">Layout System</h4>
            <p className="text-xs text-gray-400">Responsive, Anchor-based</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Other Engines Component
const OtherEngines = ({ copyToClipboard, copied }) => (
  <div className="prose prose-invert w-full max-w-none">
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Other Engine Integration</h1>
      
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400">MonoGame Integration</h2>
        <div className="bg-gray-900 p-4 rounded-lg mb-4">
          <code className="text-green-400 text-xs block break-all">
            // Initialize OpenRPG in MonoGame<br />
            var gameWorld = new OpenRPGWorld();<br />
            var networkManager = new OpenRPGNetworkManager();<br />
            var platformAdapter = new MonoGamePlatformAdapter();<br />
            gameWorld.Initialize(networkManager, platformAdapter);
          </code>
        </div>
        <p className="text-gray-400 text-sm">
          MonoGame integration provides cross-platform support with OpenRPG's modular architecture.
        </p>
      </div>

      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400">Godot C# Integration</h2>
        <div className="bg-gray-900 p-4 rounded-lg mb-4">
          <code className="text-green-400 text-xs block break-all">
            // In Godot _Ready method<br />
            OpenRPGCore.Initialize(new GodotPlatformAdapter());<br />
            world = new OpenRPGWorld(GetTree());<br />
            networkManager = new OpenRPGNetworkManager();<br />
            world.ConnectToServer("localhost", 7777);
          </code>
        </div>
        <p className="text-gray-400 text-sm">
          Godot integration leverages the scene system while maintaining OpenRPG's networking capabilities.
        </p>
      </div>

      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400">Custom Engine Integration</h2>
        <p className="text-gray-300 mb-4">
          OpenRPG's interface-driven architecture allows integration with any C# game engine:
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">Required Implementations</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• IPlatformAdapter interface</li>
              <li>• IRenderer interface</li>
              <li>• IInputManager interface</li>
              <li>• IAudioManager interface</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-400 mb-2">Optional Extensions</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Custom UI framework integration</li>
              <li>• Engine-specific optimizations</li>
              <li>• Platform-specific features</li>
              <li>• Advanced rendering pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// OpenRPG Core Systems Component
const OpenRPGCore = () => (
  <div className="prose prose-invert w-full max-w-none">
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">OpenRPG Core Systems</h1>
      
      {/* Player Management */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400 flex items-center">
          <Users className="w-8 h-8 mr-3" />
          Player Management
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">Multi-Class System</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Warrior, Archer base classes</li>
              <li>• Extensible class framework</li>
              <li>• Class-specific abilities</li>
              <li>• Cross-class skill trees</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-400 mb-2">Character Progression</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Level-based advancement</li>
              <li>• Experience point system</li>
              <li>• Stat allocation on level-up</li>
              <li>• Prestige/rebirth systems</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-400 mb-2">Comprehensive Stats</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• STR, INT, AGI, Health, Mana</li>
              <li>• Defense, Attack ratings</li>
              <li>• Movement speed, Cast speed</li>
              <li>• Critical hit, Evasion rates</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-400 mb-2">Player States</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Moving, Standing, Combat</li>
              <li>• Casting, Channeling</li>
              <li>• Dead, Teleporting</li>
              <li>• Stunned, Disabled states</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Combat System */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-red-400 flex items-center">
          <Swords className="w-8 h-8 mr-3" />
          Combat System
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-red-400 mb-2">Damage Types</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Physical damage</li>
              <li>• Magical damage</li>
              <li>• Mixed damage</li>
              <li>• Full power attacks</li>
              <li>• Max HP percentage</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-400 mb-2">Combat Mechanics</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Hit calculation formulas</li>
              <li>• Damage calculation</li>
              <li>• Critical hit system</li>
              <li>• Defense mitigation</li>
              <li>• Evasion mechanics</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-400 mb-2">Status Effects</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Buffs and debuffs</li>
              <li>• Damage over time (DOT)</li>
              <li>• Healing over time</li>
              <li>• Stat modifications</li>
              <li>• Duration-based effects</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-red-900/20 p-4 rounded-lg border border-red-500/30">
          <h3 className="font-semibold text-red-400 mb-2">Negative Status Effects</h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Comprehensive debuff system: Stun, Blind, Freeze, Slow, Burn, Bind, Poison, Silence, Confusion, and more
          </p>
        </div>
      </div>

      {/* Skills & Spells */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
          <Zap className="w-8 h-8 mr-3" />
          Skills & Spell System
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">Skill Types</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Projectile spells with trajectory</li>
              <li>• Instant cast abilities</li>
              <li>• Area of Effect (AoE) spells</li>
              <li>• Buff/Debuff applications</li>
              <li>• Dash and Warp movement</li>
              <li>• Target-seeking projectiles</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">Advanced Features</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Hierarchical skill trees</li>
              <li>• Skill prerequisites</li>
              <li>• Active/Passive categorization</li>
              <li>• Knockback/Knockdown effects</li>
              <li>• Annihilate mechanics</li>
              <li>• Combo system support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Monster AI */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400 flex items-center">
          <Brain className="w-8 h-8 mr-3" />
          Monster AI System
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-red-400 mb-2">Monster Types</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Peaceful (non-aggressive)</li>
              <li>• Aggressive (attack on sight)</li>
              <li>• Boss (enhanced abilities)</li>
              <li>• Unique (special variants)</li>
              <li>• Elite (enhanced stats)</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-400 mb-2">AI Behaviors</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Wandering patterns</li>
              <li>• Chase mechanics</li>
              <li>• Combat engagement</li>
              <li>• Flee when low health</li>
              <li>• Formation fighting</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
          <h3 className="font-semibold text-orange-400 mb-2">Dynamic Spawn Management</h3>
          <p className="text-xs sm:text-sm text-gray-400">
            Advanced spawning system with respawn timers, population limits, and area-based spawn control
          </p>
        </div>
      </div>

      {/* Quest System */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-400 flex items-center">
          <BookOpen className="w-8 h-8 mr-3" />
          Quest System
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">Quest Types</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• One-time quests</li>
              <li>• Repeatable dailies</li>
              <li>• Event-based quests</li>
              <li>• Chain questlines</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-400 mb-2">Quest Objectives</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Collect specific items</li>
              <li>• Kill target monsters</li>
              <li>• Enter specific areas</li>
              <li>• Custom script objectives</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-400 mb-2">Management</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Accept/Abandon workflow</li>
              <li>• Progress tracking</li>
              <li>• Completion rewards</li>
              <li>• Prerequisites system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Darkdom Extensions Component
const DarkdomExtensions = () => (
  <div className="prose prose-invert w-full max-w-none">
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Darkdom Framework Extensions</h1>
      
      {/* Faction PvP System */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
          <Crown className="w-8 h-8 mr-3" />
          Faction-Based PvP System
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30">
            <h3 className="font-semibold text-red-400 mb-2">Dark Faction</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Aggressive gameplay focus</li>
              <li>• PvP-oriented abilities</li>
              <li>• Conquest mechanics</li>
              <li>• Dark magic specialization</li>
            </ul>
          </div>
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
            <h3 className="font-semibold text-blue-400 mb-2">Light Faction</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Protective gameplay</li>
              <li>• Healing specialization</li>
              <li>• Justice-focused quests</li>
              <li>• Holy magic abilities</li>
            </ul>
          </div>
          <div className="bg-gray-900/20 p-4 rounded-lg border border-gray-500/30">
            <h3 className="font-semibold text-gray-400 mb-2">Neutral Faction</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Balanced approach</li>
              <li>• Trade specialization</li>
              <li>• Diplomatic options</li>
              <li>• Versatile abilities</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
          <h3 className="font-semibold text-purple-400 mb-2">Faction Interaction Rules</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-green-400 text-sm mb-1">Same Faction</h4>
              <p className="text-xs text-gray-400">Can interact, trade, cast beneficial spells, form parties</p>
            </div>
            <div>
              <h4 className="font-semibold text-red-400 text-sm mb-1">Different Factions</h4>
              <p className="text-xs text-gray-400">Can attack, cannot assist, hostile magic targeting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Monster System */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400 flex items-center">
          <Target className="w-8 h-8 mr-3" />
          Enhanced Monster System
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-400 mb-2">Advanced AI Features</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Kill type configuration (highest damage vs last hit)</li>
              <li>• Dynamic reward distribution</li>
              <li>• Group combat coordination</li>
              <li>• Event-driven state monitoring</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">Reward Systems</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Configurable gold rewards</li>
              <li>• Experience point distribution</li>
              <li>• Item drop systems</li>
              <li>• Multiple reward selectors</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enhanced Systems */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400 flex items-center">
          <Boxes className="w-8 h-8 mr-3" />
          Enhanced Systems
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-400 mb-2">Skill Bar System</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Multi-page skill bars</li>
              <li>• Customizable arrangements</li>
              <li>• Keyboard/mouse binding</li>
              <li>• Cooldown indicators</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">Advanced Inventory</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Right-click context actions</li>
              <li>• Ctrl+click quick sell</li>
              <li>• Enhanced tooltip system</li>
              <li>• Drag & drop interactions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Networking Features */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-400 flex items-center">
          <Network className="w-8 h-8 mr-3" />
          Networking & Multiplayer
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-400 mb-2">Client-Server</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Login server authentication</li>
              <li>• World server simulation</li>
              <li>• Database integration</li>
              <li>• IPC communication</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">Real-time Features</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Live state synchronization</li>
              <li>• Action queuing system</li>
              <li>• Dynamic area management</li>
              <li>• Session handling</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-400 mb-2">Performance</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Load balancing</li>
              <li>• Efficient protocols</li>
              <li>• Connection pooling</li>
              <li>• Bandwidth optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Development Tools Component
const DevelopmentTools = () => (
  <div className="prose prose-invert w-full max-w-none">
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Development Tools</h1>
      
      {/* Database Management */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400 flex items-center">
          <Database className="w-8 h-8 mr-3" />
          Database Management Tools
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">Editor Tools</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Object Name Editor</li>
              <li>• Item Database Manager</li>
              <li>• Skill Database Editor</li>
              <li>• Game Object Database</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">Utilities</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Data export/import</li>
              <li>• Visual editing interfaces</li>
              <li>• Database connectivity</li>
              <li>• Content management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testing Framework */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
          <Terminal className="w-8 h-8 mr-3" />
          Testing Framework
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-400 mb-2">Unit Testing</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• OpenRPG.UnitTesting framework</li>
              <li>• Core system validation</li>
              <li>• Performance profiling</li>
              <li>• Automated test suites</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-400 mb-2">World Testing</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Complete world simulation</li>
              <li>• Multiplayer scenarios</li>
              <li>• Load testing capabilities</li>
              <li>• Network simulation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Deployment Architecture Component
const DeploymentArchitecture = () => (
  <div className="prose prose-invert w-full max-w-none">
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Deployment & Architecture</h1>
      
      {/* System Architecture */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-400 flex items-center">
          <Workflow className="w-8 h-8 mr-3" />
          System Components
        </h2>
        <div className="relative overflow-hidden">
          <svg className="w-full h-80 bg-dark-800 rounded-lg p-4" viewBox="0 0 800 300">
            {/* Unity Client */}
            <rect x="50" y="30" width="120" height="80" rx="8" fill="#3B82F6" stroke="#60A5FA" strokeWidth="2"/>
            <text x="110" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Unity Client</text>
            <text x="110" y="75" textAnchor="middle" fill="#93C5FD" fontSize="10">(Darkdom)</text>
            
            {/* Login Server */}
            <rect x="250" y="30" width="120" height="80" rx="8" fill="#10B981" stroke="#34D399" strokeWidth="2"/>
            <text x="310" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Login Server</text>
            <text x="310" y="75" textAnchor="middle" fill="#6EE7B7" fontSize="10">(OpenRPG)</text>
            
            {/* World Server */}
            <rect x="450" y="30" width="120" height="80" rx="8" fill="#8B5CF6" stroke="#A78BFA" strokeWidth="2"/>
            <text x="510" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">World Server</text>
            <text x="510" y="75" textAnchor="middle" fill="#C4B5FD" fontSize="10">(OpenRPG)</text>
            
            {/* Database */}
            <rect x="250" y="180" width="120" height="80" rx="8" fill="#F59E0B" stroke="#FBBF24" strokeWidth="2"/>
            <text x="310" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Database</text>
            <text x="310" y="225" textAnchor="middle" fill="#FDE68A" fontSize="10">(OpenRPG)</text>
            
            {/* Content Server */}
            <rect x="450" y="180" width="120" height="80" rx="8" fill="#EF4444" stroke="#F87171" strokeWidth="2"/>
            <text x="510" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Content Server</text>
            <text x="510" y="225" textAnchor="middle" fill="#FECACA" fontSize="10">(Game Data)</text>
            
            {/* Connections */}
            {/* Unity to Login */}
            <line x1="170" y1="70" x2="250" y2="70" stroke="#60A5FA" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            
            {/* Login to World */}
            <line x1="370" y1="70" x2="450" y2="70" stroke="#34D399" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            
            {/* Unity to Database */}
            <line x1="110" y1="110" x2="110" y2="140" stroke="#60A5FA" strokeWidth="2"/>
            <line x1="110" y1="140" x2="250" y2="220" stroke="#60A5FA" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            
            {/* Login to Database */}
            <line x1="310" y1="110" x2="310" y2="180" stroke="#34D399" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            
            {/* World to Content */}
            <line x1="510" y1="110" x2="510" y2="180" stroke="#A78BFA" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            
            {/* Arrow marker definition */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>

      {/* Server Requirements */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400 flex items-center">
          <Server className="w-8 h-8 mr-3" />
          Server Requirements
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-red-400 mb-2">Core Requirements</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• .NET Framework 4.7.2+</li>
              <li>• SQL Server or compatible DB</li>
              <li>• IPC communication infrastructure</li>
              <li>• 4GB RAM minimum (16GB recommended)</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-400 mb-2">Client Requirements</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Compatible Unity version</li>
              <li>• Reliable network connectivity</li>
              <li>• Windows platform support</li>
              <li>• DirectX 11+ compatible GPU</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scaling & Performance */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-400 flex items-center">
          <Cpu className="w-8 h-8 mr-3" />
          Scaling & Performance
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-400 mb-2">Load Balancing</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Multiple world servers</li>
              <li>• Dynamic server allocation</li>
              <li>• Player distribution</li>
              <li>• Resource monitoring</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-green-400 mb-2">Performance Stats</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• 50,000+ monsters supported</li>
              <li>• 1,000+ players per area</li>
              <li>• &lt;50ms response times</li>
              <li>• Real-time AI processing</li>
            </ul>
          </div>
          <div className="bg-dark-800 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-400 mb-2">Monitoring</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Comprehensive logging</li>
              <li>• Performance profiling</li>
              <li>• Debug tools</li>
              <li>• Health monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400 flex items-center">
          <Star className="w-8 h-8 mr-3" />
          Key Benefits
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
            <h3 className="font-semibold text-green-400 mb-2">For Developers</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Rapid development framework</li>
              <li>• Modular architecture</li>
              <li>• Proven, battle-tested components</li>
              <li>• Comprehensive documentation</li>
            </ul>
          </div>
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
            <h3 className="font-semibold text-blue-400 mb-2">For Games</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Scalable multiplayer support</li>
              <li>• Rich RPG feature set</li>
              <li>• Unique faction PvP system</li>
              <li>• Professional UI framework</li>
            </ul>
          </div>
          <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
            <h3 className="font-semibold text-purple-400 mb-2">For Operations</h3>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
              <li>• Multi-server deployment</li>
              <li>• Robust data persistence</li>
              <li>• Built-in monitoring tools</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Documentation