import { useEffect, useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ScrollSnapContainer({ children }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  const sectionCount = Array.isArray(children) ? children.length : 1;

  // Scrolling
  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Diese Variable lebt jetzt stabil im Scope des Effekts
    let isLocked = false;

    const onWheel = (e) => {
      e.preventDefault();

      // 1. Sperre prüfen
      if (isLocked) return;

      // 2. Schwellenwert (ignoriert schwaches Auslaufen des Touchpads)
      if (Math.abs(e.deltaY) < 30) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = activeIndexRef.current + direction;

      // 3. Grenzen prüfen
      if (nextIndex < 0 || nextIndex >= sectionCount) return;

      // 4. Sperren und Scrollen
      isLocked = true;
      goToSection(nextIndex);

      // 5. Harder Cooldown
      // Erst wenn diese Zeit um ist, darf isLocked wieder false werden.
      // 1000ms ist sicher für die meisten Touchpads.
      setTimeout(() => {
        isLocked = false;
      }, 500);
    };

    // WICHTIG: Leeres Dependency-Array [], damit der Listener nur EINMAL 
    // beim Mounten erstellt wird und isLocked stabil bleibt.
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);


  const goToSection = (index) => {
    if (index < 0 || index >= sectionCount) return;

    const container = containerRef.current;

    container.scrollTo({
      top: index * window.innerHeight * 0.85,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <div className="h-[85vh] relative w-full overflow-hidden text-white">
      {/* Scroll-Container */}
      <div
        ref={containerRef}
        className="h-[85vh] w-full overflow-y-scroll scroll-smooth scrollbar-hide"
      >
        {children}
      </div>

      {/* Pfeil nach oben – nur anzeigen, wenn nicht erstes Element */}
      {activeIndex > 0 && (
        <button
          onClick={() => goToSection(activeIndex - 1)}
          className="absolute top-1 left-1/2 -translate-x-1/2 transition"
        >
          <ChevronUp size={40} />
        </button>
      )}

      {/* Pfeil nach unten – nur anzeigen, wenn nicht letztes Element */}
      {activeIndex < sectionCount - 1 && (
        <button
          onClick={() => goToSection(activeIndex + 1)}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 transition"
        >
          <ChevronDown size={40} />
        </button>
      )}

      {/* Fortschritts-Punkte – nur auf Desktop sichtbar */}
      <div className="hidden lg:flex absolute right-20 top-1/2 -translate-y-1/2 flex-col gap-5">
        {Array.from({ length: sectionCount }).map((_, index) => (
          <div
            key={index}
            onClick={() => goToSection(index)}
            className={`w-3.5 h-3.5 rounded-full cursor-pointer transition-all ${
              activeIndex === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
