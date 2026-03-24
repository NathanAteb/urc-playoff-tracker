import React from "react";
import type { BroadcasterKey } from "@/data/rugby/urcFixturesSchedule";

const BroadcasterBadges = ({ keys }: { keys: BroadcasterKey[] }) => {
  if (keys.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-1.5 justify-end">
      {keys.map((k) =>
        k === "premier" ? (
          <span
            key={k}
            className="inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide bg-neutral-900 text-amber-300 border border-neutral-700"
          >
            Premier Sports
          </span>
        ) : (
          <span
            key={k}
            className="inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide bg-teal-600 text-white"
          >
            S4C
          </span>
        )
      )}
    </div>
  );
};

export default BroadcasterBadges;
