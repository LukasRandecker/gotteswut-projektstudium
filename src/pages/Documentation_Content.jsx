import { useParams, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import DocumentationEntry from "../components/DocumentationEntry.jsx";
import { Subpages_content } from "../content/Subpages_content.js";

function Documentation_Content() {
  const { subpage } = useParams();
  const navigate = useNavigate();
  const contentArray = Subpages_content[subpage];

  // Scroll immer nach oben
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [subpage]);

  // Ungültige Subpage → zurück zur Übersicht
  useLayoutEffect(() => {
    if (!contentArray) {
      navigate("/dokumentation", { replace: true });
    }
  }, [contentArray, navigate]);

  if (!contentArray) {
    return null;
  }

  // Sanftes Scrollen zu den Titeln
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#191C23] to-[#26262E] text-zinc-100 font-sans">
      <Navbar />

      {/* Navigation & Header - Angepasst an deinen Screenshot Look */}
      <header className="flex w-full justify-center items-center px-6 lg:px-20 py-6">
        <div className="flex justify-between items-center">
          <div className="space-y-4 font-chelsea">
            {/* Dynamische Headline (der Key) */}
            <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              {subpage.replace('_', ' ')}
            </h1>
            
            {/* Pill-Navigation für die einzelnen Title */}
            <nav className="flex flex-wrap justify-center items-center gap-5">
              {contentArray.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(`section-${index}`)}
                  className="px-6 py-3 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold text-zinc-300 hover:bg-white hover:text-black transition-all duration-300"
                >
                  {item.title}
                </button>
              ))}
              {/* Schließen Button (X) - Minimalistischer Look */}
              <button 
                onClick={() => navigate('/dokumentation')}
                className="px-4 py-1.5 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold text-zinc-300 hover:bg-white hover:text-black transition-all duration-300"
              >
                <span className="text-2xl font-light group-hover:scale-110 transition-transform">✕</span>
              </button>
            </nav>
          </div>        
        </div>
      </header>

      {/* Content-Bereich */}
      <main className="px-6 lg:px-20 ">
        {contentArray.map((content, index) => (
          <section 
            id={`section-${index}`} 
            key={index} 
            className="scroll-mt-40 transition-opacity duration-700 animate-in fade-in slide-in-from-bottom-4"
          >
            <DocumentationEntry content={content} />
          </section>
        ))}
      </main>
    </div>
  );
}

export default Documentation_Content;