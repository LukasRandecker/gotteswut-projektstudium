import Navbar from '../components/Navbar.jsx'
import IconBackground from '../components/IconBackground.jsx'

import MapIMG from '../assets/FurtwangenMapSkizze.png'

function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#0C0C16]">
        <IconBackground />
    <div className='relative z-10 '>
      <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-5 font-chelsea">
        
        {/* Überschrift */}
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-200 text-center mb-16 uppercase">
          Kontakt 
        </h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        
        {/* Bild */}
        <div className='md:w-1/2 rounded-2xl overflow-hidden  mb-10 md:mb-0'>
          <img
            src={MapIMG}
            alt="Kontakt Bild"
            loading='lazy'
            className="h-[70vh] object-cover"
          />
        </div>

        {/* Rechte Seite – Kontakt Infos */}
        <div className="md:w-1/2 flex items-center justify-center px-6 ">
          <div className="bg-[#13131B]/80 border border-zinc-700 rounded-2xl p-10 shadow-xl max-w-md w-full mb-10 md:mb-0 ">
            
            {/* Projekt Mail */}
            <div className="mb-10 text-center">
              <h2 className="text-xl font-semibold text-zinc-200 mb-2">
                Kontakt
              </h2>
                <p className="text-zinc-400">
                    <strong>E-Mail:</strong>{' '}
                    <a href="mailto:gotteswut@gmail.com" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">
                        gotteswut@gmail.com
                    </a>
                </p>
            </div>

            {/* Hochschule */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-zinc-200 mb-2">
                Hochschule Furtwangen
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Robert-Gerwig-Platz 1<br />
                78120 Furtwangen im Schwarzwald<br />
                +49 7723 920-0<br />
                <br />
                <p className="text-zinc-400">
                    <strong>E-Mail:</strong>{' '}
                    <a href="mailto: info@hs-furtwangen.de" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">
                        info@hs-furtwangen.de
                    </a>
                </p>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ContactPage; 
