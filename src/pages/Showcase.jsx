import React from 'react'
import { ExternalLink, Star, Users, Calendar, Code } from 'lucide-react'

const Showcase = () => {
  const games = [
    {
      title: "Realm of Shadows",
      description: "A dark fantasy MMORPG with 3-faction PvP warfare",
      image: "realmofshadows.png",
      features: ["1000+ concurrent players", "50,000 active monsters", "3-faction PvP"],
      tech: ["Unity", "Darkdom Framework", "DarkdomUI"],
      link: "#",
      status: "Live"
    },
    {
      title: "Crystal Legends",
      description: "Classic RPG experience with modern networking",
      image: "crystallegends.png",
      features: ["Cross-platform play", "Real-time combat", "Guild systems"],
      tech: ["MonoGame", "OpenRPG Core"],
      link: "#",
      status: "Beta"
    },
    {
      title: "Pixel Kingdoms",
      description: "Retro-style MMO with massive multiplayer battles",
      image: "pixelkingdoms.png",
      features: ["Pixel art style", "500+ players per map", "Territory control"],
      tech: ["Custom Engine", "OpenRPG Core"],
      link: "#",
      status: "Development"
    }
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Games Built with <span className="gradient-text">OpenRPG & Darkdom</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover amazing games powered by our framework, from indie projects to massive multiplayer experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="feature-card group">
              <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-800 h-48">
                <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    game.status === 'Live' ? 'bg-green-500' :
                    game.status === 'Beta' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}>
                    {game.status}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-400 mb-4">{game.description}</p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary-400 mb-1">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {game.features.map((feat, i) => (
                      <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-1">Built With</h4>
                  <div className="flex flex-wrap gap-2">
                    {game.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <a href={game.link} className="inline-flex items-center text-primary-400 hover:text-primary-300">
                Learn More <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-card p-8">
          <h2 className="text-2xl font-semibold mb-4">Submit Your Game</h2>
          <p className="text-gray-300 mb-6">
            Built something awesome with OpenRPG or Darkdom? We'd love to feature it!
          </p>
          <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold">
            Submit Your Game
          </button>
        </div>
      </div>
    </div>
  )
}

export default Showcase