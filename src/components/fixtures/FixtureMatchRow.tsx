import React from "react";
import { MapPin, ChevronsRight } from "lucide-react";
import type { ScheduledFixture } from "@/data/rugby/urcFixturesSchedule";
import { getFixtureTeam } from "@/data/rugby/teamFixtureMeta";
import TeamFixtureBanner from "./TeamFixtureBanner";
import BroadcasterBadges from "./BroadcasterBadges";
import { fixtureRowGridClass } from "./fixtureRowGrid";

interface FixtureMatchRowProps {
  fixture: ScheduledFixture;
}

const TimeBadge = ({
  time,
  compact,
}: {
  time: string;
  compact?: boolean;
}) => (
  <div
    className={`flex shrink-0 items-center justify-center rounded border border-cyan-500/40 bg-white px-2 py-1.5 text-xs font-semibold text-neutral-700 shadow-sm sm:text-sm ${
      compact ? "" : "w-full max-w-[5.5rem] justify-self-center"
    }`}
  >
    {time}
  </div>
);

const FixtureMatchRow = ({ fixture }: FixtureMatchRowProps) => {
  const home = getFixtureTeam(fixture.home);
  const away = getFixtureTeam(fixture.away);

  return (
    <article className="border-b border-neutral-200 bg-white">
      {/* Mobile: logos + time only (no name banners) */}
      <div className="px-2 pt-3 md:hidden">
        <div className="flex items-center justify-center gap-4">
          <img
            src={home.logo}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded object-contain"
          />
          <TimeBadge time={fixture.time} compact />
          <img
            src={away.logo}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded object-contain"
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-3">
          <div className="flex min-w-0 flex-1 items-start gap-1.5 text-xs text-neutral-600">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden />
            <span className="leading-snug">{fixture.venue}</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <BroadcasterBadges keys={fixture.broadcasters} />
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

      {/* Desktop: aligned grid with banners */}
      <div
        className={`hidden md:grid md:px-3 md:py-3 lg:px-4 ${fixtureRowGridClass}`}
      >
        <div className="flex min-w-0 items-center gap-2 md:contents">
          <img
            src={home.logo}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded object-contain md:col-start-1 md:row-start-1 md:self-center md:justify-self-center"
          />
          <div className="min-w-0 md:col-start-2 md:row-start-1 md:flex md:h-full md:items-stretch">
            <TeamFixtureBanner team={home} side="home" />
          </div>
        </div>

        <div className="flex justify-center md:col-start-3 md:row-start-1 md:justify-self-center md:self-center">
          <TimeBadge time={fixture.time} />
        </div>

        <div className="flex min-w-0 items-center gap-2 md:contents">
          <div className="min-w-0 md:col-start-4 md:row-start-1 md:flex md:h-full md:items-stretch">
            <TeamFixtureBanner team={away} side="away" />
          </div>
          <img
            src={away.logo}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded object-contain md:col-start-5 md:row-start-1 md:self-center md:justify-self-center"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 md:col-start-6 md:row-start-1 md:flex-nowrap md:self-center">
          <div className="flex min-w-0 flex-1 items-start gap-1.5 text-sm text-neutral-600">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden />
            <span className="leading-snug">{fixture.venue}</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <BroadcasterBadges keys={fixture.broadcasters} />
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

      <p className="sr-only">
        {home.name} versus {away.name}, kick-off {fixture.time}, {fixture.venue}
      </p>
    </article>
  );
};

export default FixtureMatchRow;
