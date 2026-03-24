import React from "react";
import { MapPin, ChevronsRight } from "lucide-react";
import type { KnockoutMatch } from "@/data/rugby/urcFixturesSchedule";
import BroadcasterBadges from "./BroadcasterBadges";
import { fixtureRowGridClass } from "./fixtureRowGrid";

interface KnockoutMatchRowProps {
  match: KnockoutMatch;
}

const KnockoutMatchRow = ({ match }: KnockoutMatchRowProps) => (
  <div className="border-b border-neutral-200 bg-white">
    <div
      className={`grid grid-cols-1 gap-3 px-2 py-3 sm:px-3 ${fixtureRowGridClass} lg:px-4`}
    >
      <div
        className="hidden md:col-start-1 md:row-start-1 md:block md:h-9 md:w-9 md:self-center md:justify-self-center"
        aria-hidden
      />

      <div className="flex min-h-[44px] items-center justify-center rounded-lg bg-neutral-900 px-3 sm:min-h-[52px] md:col-start-2 md:row-start-1 md:min-h-0 md:px-2 md:h-full">
        <span className="text-sm font-bold tracking-wide text-white">TBC</span>
      </div>

      <div className="flex justify-center md:col-start-3 md:row-start-1 md:justify-self-center md:self-center">
        <div className="flex w-full max-w-[5.5rem] items-center justify-center rounded border border-neutral-300 bg-white px-2 py-2 text-xs font-semibold text-neutral-600">
          TBC
        </div>
      </div>

      <div className="flex min-h-[44px] items-center justify-center rounded-lg bg-neutral-900 px-3 sm:min-h-[52px] md:col-start-4 md:row-start-1 md:min-h-0 md:h-full md:px-2">
        <span className="text-sm font-bold tracking-wide text-white">TBC</span>
      </div>

      <div
        className="hidden md:col-start-5 md:row-start-1 md:block md:h-9 md:w-9 md:self-center md:justify-self-center"
        aria-hidden
      />

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-2 md:col-start-6 md:row-start-1 md:flex-nowrap md:self-center md:border-t-0 md:pt-0">
        <div className="flex min-w-0 flex-1 items-center gap-1.5 text-xs text-neutral-600 sm:text-sm">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden />
          <span>{match.venue}</span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <BroadcasterBadges keys={match.broadcasters} />
          <button
            type="button"
            className="shrink-0 rounded p-1 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-600"
            aria-label="Match details"
          >
            <ChevronsRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default KnockoutMatchRow;
