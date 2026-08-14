import Navbar from '../components/Navbar.jsx'
import IconBackground from '../components/IconBackground.jsx'

import TeamIMG1 from '../assets/Team_1.jpeg'
import TeamIMG2 from '../assets/Team_2.jpeg'

function TeamPage() {
  return (

    <div className="relative min-h-screen  bg-[#0C0C16]">
        <IconBackground />
    <div className='relative z-10 '>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-5 font-chelsea">
        
        {/* Überschrift */}
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-200 text-center mb-16 uppercase">
          Team 
        </h1>

        {/* Team Bilder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 ">
          <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-zinc-500">
            <img
              src={TeamIMG1}
              alt="Team Bild 1"
              loading='lazy'
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-zinc-500">
            <img
              src={TeamIMG2}
              alt="Team Bild 2"
              loading='lazy'
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Team Mitglieder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Professor */}
          <div className="bg-[#13131B]/80 border border-zinc-700 rounded-2xl p-6 text-center shadow-lg">
            <h2 className="text-xl font-semibold text-zinc-200 mb-1">
              Prof. Thomas Krach
            </h2>
            <p className="text-zinc-400 text-sm">
              Projekt Betreuer
            </p>
          </div>

          {/* Studierende */}
          <div className="bg-[#13131B]/80 border border-zinc-700 rounded-2xl p-6 text-center shadow-lg">
            <h2 className="text-lg font-semibold text-zinc-200 mb-1">
              Evi
            </h2>
            <p className="text-zinc-400 text-sm">
              Medienkonzeption
            </p>
          </div>

          <div className="bg-[#13131B]/80 border border-zinc-700 rounded-2xl p-6 text-center shadow-lg">
            <h2 className="text-lg font-semibold text-zinc-200 mb-1">
              Toni
            </h2>
            <p className="text-zinc-400 text-sm">
              Medieninformatik
            </p>
          </div>

          <div className="bg-[#13131B]/80 border border-zinc-700 rounded-2xl p-6 text-center shadow-lg">
            <h2 className="text-lg font-semibold text-zinc-200 mb-1">
              Lukas
            </h2>
            <p className="text-zinc-400 text-sm">
              Medieninformatik
            </p>
          </div>

          <div className="bg-[#13131B]/80 border border-zinc-700 rounded-2xl p-6 text-center shadow-lg">
            <h2 className="text-lg font-semibold text-zinc-200 mb-1">
              Lina 
            </h2>
            <p className="text-zinc-400 text-sm">
              Medienkonzeption
            </p>
          </div>

          <div className="bg-[#13131B]/80 border border-zinc-700 rounded-2xl p-6 text-center shadow-lg">
            <h2 className="text-lg font-semibold text-zinc-200 mb-1">
              Lukas
            </h2>
            <p className="text-zinc-400 text-sm">
              Medienkonzeption
            </p>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default TeamPage
