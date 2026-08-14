import Navbar from '../components/Navbar.jsx'

function ErrorPage() {
  return (
    <div className="min-h-screen bg-[url('./assets/Background.jpg')] bg-cover bg-center bg-no-repeat ">
      
      <Navbar />

      {/* Zentrale Error Message */}
      <div className="h-[85vh] flex items-center justify-center px-6">
        <div className="text-center font-chelsea">
          <h1 className="text-7xl md:text-8xl font-extrabold text-zinc-200 mb-6">
            Error 404
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-2">
            Dein Abenteuer hat ein unerwartetes Hindernis gefunden!
          </p>

          <p className="text-sm md:text-base text-zinc-500">
            Seite existiert nicht oder wurde von den Göttern verbannt!
          </p>

           <div className="p-10">
              <a 
                href="/" 
                className="px-10 py-4 border border-zinc-600 rounded-full text-s font-bold tracking-widest text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 transition-all duration-300 uppercase "
              >
               Zurück
              </a>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default ErrorPage
