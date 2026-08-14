import React, { useState } from "react";

function DocumentationEntry({ content }) {
  const { title, subtitle, description, media } = content;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Vorheriger Slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  // Nächster Slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

 const dynamicTailwindClasses = {
  1: {
    portrait: "h-[50vh] w-auto",
    landscape: "w-[45vw] h-auto",
  },
  2: {
    portrait: "h-[50vh] w-auto",
    landscape: "w-[30vw] h-auto",
  },
  3: {
    portrait: "h-[45vh] w-auto",
    landscape: "w-[20vw] h-auto",
  },
  4: {
    portrait: "h-[40vh] w-auto",
    landscape: "w-[20vw] h-auto",
  },
  5: {
    portrait: "h-[40vh] w-auto",
    landscape: "w-[19vw] h-auto",
  },
  6: {
    portrait: "h-[40vh] w-auto",
    landscape: "w-[15vw] h-auto",
  },
};

const mediaCount = Math.min(media.length, 6);


  return (
    <section className="w-full lg:pt-20 px-6">
      <div>
        {/* Media Grid für Desktop */}
        <div className="sm:hidden md:hidden lg:flex max-w-[75vw] mx-auto flex-wrap justify-center gap-8 mb-12">
  {media.map((item, index) => {
    const isPortrait = item.aspect === "portrait";

    const mediaClass = isPortrait
      ? dynamicTailwindClasses[mediaCount].portrait
      : dynamicTailwindClasses[mediaCount].landscape;

    return (
      <div
        key={index}
        className="hidden lg:flex justify-center rounded-md overflow-hidden bg-transparent"
      >
        {item.type === "image" && (
          <img
            src={item.src}
            alt={item.alt || ""}
            loading='lazy'
            className={`${mediaClass} object-contain`}
          />
        )}

        {item.type === "video" && (
          <video
            src={item.src}
            className={`${mediaClass} object-cover`}
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          />
        )}
      </div>
    );
  })}
</div>


        {/* Eigenes Slider-Element für Mobile/Tablet */}
        <div className="lg:hidden max-w-[90vw] mx-auto mb-12 relative">
          {/* Aktuelles Bild */}
          {media.length > 0 && (
            <div className="rounded-md overflow-hidden bg-transparent flex justify-center border border-zinc-700">
              {media[currentIndex].type === "image" && (
                <img
                  src={media[currentIndex].src}
                  alt={media[currentIndex].alt || ""}
                  loading='lazy'
                  className={`${
                    media[currentIndex].aspect === "portrait"
                      ? "h-[50vh] w-auto"
                      : "w-full h-auto"
                  } object-contain`}
                />
              )}
              {media[currentIndex].type === "video" && (
                <video
                  src={media[currentIndex].src}
                  className={`${
                    media[currentIndex].aspect === "portrait"
                      ? "h-[50vh] w-auto"
                      : "w-full h-auto"
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          {media.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2"
              >
                ›
              </button>
            </>
          )}

          {/* Pagination Punkte */}
          <div className="flex justify-center mt-2 gap-2">
            {media.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-zinc-200" : "bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-5xl mx-auto pb-10 font-krub">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-200 mb-2 font-chelsea">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm uppercase tracking-wide text-zinc-400 mb-4 font-chelsea">
              {subtitle}
            </p>
          )}

         {description.intro.map((paragraph, index) => (
            <p key={`intro-${index}`} className="text-zinc-400 leading-relaxed text-sm md:text-base mb-4">
              {paragraph}
            </p>
          ))}

          <ul className="mt-2 mb-4 space-y-0.5 list-disc list-inside text-zinc-400 text-sm md:text-base leading-relaxed">
            {description.list.map((item, index) => (
              <li key={`list-${index}`}>{item}</li>
            ))}
          </ul>

          {description.outro.map((paragraph, index) => (
            <p key={`outro-${index}`} className="text-zinc-400 leading-relaxed text-sm md:text-base mb-4">
              {paragraph}
            </p>
          ))}

        </div>
      </div>
    </section>
  );
}

export default DocumentationEntry;
