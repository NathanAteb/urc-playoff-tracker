import React from "react";
import type { FixtureTeamView } from "@/data/rugby/teamFixtureMeta";

interface TeamFixtureBannerProps {
  team: FixtureTeamView;
  side: "home" | "away";
}

const TeamFixtureBanner = ({ team, side }: TeamFixtureBannerProps) => {
  const textCls = team.lightBanner ? "text-neutral-900" : "text-white";
  const rounded = side === "home" ? "rounded-l-lg rounded-r-md" : "rounded-r-lg rounded-l-md";
  const patternSide = side === "home" ? "left-0" : "right-0";
  const gradientCls =
    side === "home"
      ? "bg-gradient-to-r from-black/25 to-transparent"
      : "bg-gradient-to-l from-black/25 to-transparent";

  return (
    <div
      className={`relative flex h-full min-h-[44px] w-full min-w-0 overflow-hidden sm:min-h-[52px] ${rounded} shadow-sm`}
      style={{ backgroundColor: team.bannerColor }}
    >
      <div
        className={`pointer-events-none absolute inset-y-0 w-1/3 ${patternSide} ${gradientCls}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute inset-0 opacity-[0.12] ${patternSide === "left-0" ? "bg-[radial-gradient(circle_at_20%_50%,white,transparent_55%)]" : "bg-[radial-gradient(circle_at_80%_50%,white,transparent_55%)]"}`}
        aria-hidden
      />
      <div
        className={`relative z-10 flex w-full items-center justify-center px-2 text-center sm:px-4 ${textCls}`}
      >
        <span className="max-w-full truncate text-[10px] font-bold uppercase tracking-wide sm:text-xs md:text-sm">
          {team.bannerLabel}
        </span>
      </div>
    </div>
  );
};

export default TeamFixtureBanner;
