
import React, { useState, useEffect } from 'react';
import RugbyStandingsTable from "@/components/RugbyStandingsTable";
import RugbyLegend from "@/components/RugbyLegend";

const INTRO_VIDEO_SRC = '/lv_0_20240126093452.mp4';

const Index = () => {
  const [introOpen, setIntroOpen] = useState(true);

  useEffect(() => {
    if (!introOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [introOpen]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {introOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Intro video"
        >
          <video
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
      <div className="max-w-[1400px] mx-auto">
        <RugbyStandingsTable />
        <div className="mt-6">
          <RugbyLegend />
        </div>
      </div>
    </div>
  );
};

export default Index;
