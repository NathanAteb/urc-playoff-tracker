import React from "react";
import SiteNav from "@/components/SiteNav";
import FixtureMatchRow from "@/components/fixtures/FixtureMatchRow";
import KnockoutMatchRow from "@/components/fixtures/KnockoutMatchRow";
import {
  leagueRounds,
  knockoutFixtures,
} from "@/data/rugby/urcFixturesSchedule";

const slugify = (label: string) =>
  label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const Fixtures = () => {
  const jumpLinks = [
    ...leagueRounds.map((r) => ({ id: slugify(r.roundLabel), label: r.roundLabel })),
    ...knockoutFixtures.map((k) => ({ id: slugify(k.stageLabel), label: k.stageLabel })),
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-3 py-4 sm:px-4 sm:py-6">
        <SiteNav />
        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            United Rugby Championship
          </h1>
          <p className="mt-1 text-sm text-neutral-600">
            Fixtures — rounds 14–18 and knockout stages (kick-off times local to venue)
          </p>
        </header>

        <nav
          className="sticky top-0 z-30 -mx-3 mb-6 flex gap-2 overflow-x-auto border-b border-neutral-200 bg-white/95 px-3 py-2 backdrop-blur-sm sm:-mx-4 sm:px-4"
          aria-label="Jump to round"
        >
          {jumpLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 rounded-full border border-cyan-500/30 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 transition hover:bg-cyan-100"
            >
              {label.replace("ROUND ", "R")}
            </a>
          ))}
        </nav>

        <div className="space-y-12">
          {leagueRounds.map((round) => (
            <section
              key={round.roundLabel}
              id={slugify(round.roundLabel)}
              className="scroll-mt-24"
            >
              <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide text-cyan-500">
                {round.roundLabel}
              </h2>
              <div className="rounded-lg border border-neutral-200 shadow-sm">
                {round.dateGroups.map((group) => (
                  <div key={group.dateLabel}>
                    <h3 className="border-b border-neutral-200 bg-neutral-50 py-2 text-center text-sm font-semibold text-neutral-800">
                      {group.dateLabel}
                    </h3>
                    <div>
                      {group.matches.map((m, i) => (
                        <FixtureMatchRow
                          key={`${group.dateLabel}-${m.home}-${m.away}-${i}`}
                          fixture={m}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {knockoutFixtures.map((block) => (
            <section
              key={block.stageLabel}
              id={slugify(block.stageLabel)}
              className="scroll-mt-24"
            >
              <div className="mb-4 flex flex-col justify-between gap-1 border-b border-neutral-200 pb-2 sm:flex-row sm:items-center">
                <h2 className="text-lg font-semibold uppercase tracking-wide text-cyan-500">
                  {block.stageLabel}
                </h2>
                <p className="text-sm font-medium text-neutral-800">{block.dateRight}</p>
              </div>
              <div className="rounded-lg border border-neutral-200 shadow-sm">
                {block.matches.map((m, i) => (
                  <KnockoutMatchRow key={`${block.stageLabel}-${i}`} match={m} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
