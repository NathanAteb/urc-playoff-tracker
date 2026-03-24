
import React, { useState, useEffect, useRef } from 'react';
import RugbyStandingsTable from "@/components/RugbyStandingsTable";
import RugbyLegend from "@/components/RugbyLegend";
import SiteNav from "@/components/SiteNav";

const INTRO_VIDEO_SRC = '/lv_0_20240126093452.mp4';

const Index = () => {
  const [introOpen, setIntroOpen] = useState(true);
  const introVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!introOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [introOpen]);

  useEffect(() => {
    if (!introOpen) return;
    const v = introVideoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    const attempt = () => {
      void v.play().catch(() => {
        /* autoplay blocked until gesture — controls still allow start */
      });
    };
    attempt();
    if (v.readyState < 2) {
      v.addEventListener('loadeddata', attempt, { once: true });
      return () => v.removeEventListener('loadeddata', attempt);
    }
  }, [introOpen]);

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4">
      {introOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Intro video"
        >
          <video
            ref={introVideoRef}
            className="max-h-full max-w-full w-full object-contain"
            src={INTRO_VIDEO_SRC}
            autoPlay
            muted
            playsInline
            preload="auto"
            controls
            onEnded={() => setIntroOpen(false)}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="max-w-[1400px] mx-auto w-full min-w-0">
        <SiteNav />
        <RugbyStandingsTable />
        <div className="mt-6">
          <RugbyLegend />
        </div>
      </div>
    </div>
  );
};

export default Index;
