import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume, VolumeOff, RefreshCw } from "lucide-react";

function ScrollSectionVideo({ videoSrc }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Video läuft initial
  const [isMuted, setIsMuted] = useState(true);     // Video startet stumm
  const [hasScrolled, setHasScrolled] = useState(false); // Scroll-Interaktion

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer: pausieren, wenn Video nicht sichtbar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Wenn der User schon gescrollt hat, Ton an
            video.muted = !hasScrolled;
            setIsMuted(!hasScrolled); // Icon dynamisch setzen
            if (isPlaying) video.play().catch((e) => console.log(e));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    // Scroll Event: erste echte User-Interaktion → Ton an
    const handleScroll = () => {
      if (!video || hasScrolled) return;

      video.muted = false; // Ton einschalten
      setIsMuted(false);   // Icon aktualisieren
      if (isPlaying) video.play().catch((e) => console.log(e));

      setHasScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying, hasScrolled]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) video.pause();
    else video.play().catch((e) => console.log(e));

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;  // Von Anfang abspielen
    video.play().catch((e) => console.log(e));
    setIsPlaying(true);
  };

  return (
    <section className="h-[100%] w-full flex flex-col items-center justify-center px-4 md:px-20 sm:px-10 gap-4">
      <div className="w-full max-w-6xl h-64 sm:h-96 md:h-[40vh] lg:h-[65vh] rounded-2xl overflow-hidden shadow-xl border border-zinc-700 relative">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          className="w-full h-full object-cover object-center rounded-2xl shadow-xl"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={togglePlay}
          className="p-4 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition flex items-center justify-center"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <button
          onClick={toggleMute}
          className="p-4 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition flex items-center justify-center"
        >
          {isMuted ? <VolumeOff size={20} /> : <Volume size={20} />}
        </button>

        <button
          onClick={restartVideo}
          className="p-4 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition flex items-center justify-center"
        >
          <RefreshCw size={20} />
        </button>
      </div>
    </section>
  );
}

export default ScrollSectionVideo;
