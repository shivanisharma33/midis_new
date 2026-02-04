/**
 * Cursor Demo Component
 * Showcase different cursor states and effects
 * Add this to any page to demonstrate the cursor functionality
 */

export const CursorDemo = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container-responsive max-w-4xl">

        <div className="text-center mb-12">
          <h2 className="text-heading-lg text-white mb-4">
            Crazy Cursor Effects
          </h2>
          <p className="text-body text-gray-400">
            Hover over the elements below to see different cursor interactions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Normal State */}
          <div className="card-responsive bg-white/5 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center text-3xl">
              ✨
            </div>
            <h3 className="text-heading-sm text-white mb-2">
              Normal State
            </h3>
            <p className="text-caption text-gray-400">
              Default cursor with particle trail
            </p>
          </div>

          {/* Hover State */}
          <button className="card-responsive bg-gradient-to-br from-orange-500 to-pink-500 border-0 text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-3xl">
              🎯
            </div>
            <h3 className="text-heading-sm text-white mb-2">
              Hover State
            </h3>
            <p className="text-caption text-white/80">
              Cursor expands and rotates
            </p>
          </button>

          {/* Click State */}
          <button
            onClick={() => {}}
            className="card-responsive bg-gradient-to-br from-purple-500 to-blue-500 border-0 text-center hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-3xl">
              💥
            </div>
            <h3 className="text-heading-sm text-white mb-2">
              Click Effect
            </h3>
            <p className="text-caption text-white/80">
              Particle burst on click
            </p>
          </button>

          {/* Link State */}
          <a
            href="#demo"
            className="card-responsive bg-gradient-to-br from-green-500 to-teal-500 border-0 text-center hover:scale-105 transition-transform cursor-pointer block"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-3xl">
              🔗
            </div>
            <h3 className="text-heading-sm text-white mb-2">
              Link Hover
            </h3>
            <p className="text-caption text-white/80">
              Interactive element detection
            </p>
          </a>

        </div>

        {/* Interaction Area */}
        <div className="mt-12 card-responsive bg-white/5 border border-white/10 text-center min-h-[200px] flex items-center justify-center">
          <div>
            <p className="text-body text-gray-300 mb-4">
              Move your cursor around to see the particle trail effect
            </p>
            <p className="text-caption text-gray-500">
              Click anywhere to create a burst of particles
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-4xl mb-2">✨</div>
            <p className="text-caption text-gray-400">Particle Trails</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🌈</div>
            <p className="text-caption text-gray-400">Gradient Outline</p>
          </div>
          <div>
            <div className="text-4xl mb-2">⚡</div>
            <p className="text-caption text-gray-400">Smooth Animations</p>
          </div>
        </div>

      </div>
    </section>
  );
};
