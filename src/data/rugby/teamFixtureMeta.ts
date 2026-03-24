import { teams } from "./index";

export type TeamSlug =
  | "leinster"
  | "munster"
  | "ulster"
  | "connacht"
  | "cardiff"
  | "ospreys"
  | "scarlets"
  | "dragons"
  | "stormers"
  | "bulls"
  | "sharks"
  | "lions"
  | "glasgow"
  | "edinburgh"
  | "benetton"
  | "zebre";

const SLUG_TO_TEAM_NAME: Record<TeamSlug, string> = {
  leinster: "LEINSTER RUGBY",
  munster: "MUNSTER RUGBY",
  ulster: "ULSTER RUGBY",
  connacht: "CONNACHT RUGBY",
  cardiff: "CARDIFF RUGBY",
  ospreys: "OSPREYS",
  scarlets: "SCARLETS",
  dragons: "DRAGONS RFC",
  stormers: "DHL STORMERS",
  bulls: "VODACOM BULLS",
  sharks: "HOLLYWOODBETS SHARKS",
  lions: "EMIRATES LIONS",
  glasgow: "GLASGOW WARRIORS",
  edinburgh: "EDINBURGH RUGBY",
  benetton: "BENETTON RUGBY",
  zebre: "ZEBRE PARMA",
};

/** Banner background — approx URC / club primary */
const BANNER_COLORS: Record<TeamSlug, string> = {
  leinster: "#003B7A",
  munster: "#D20014",
  ulster: "#E31837",
  connacht: "#007A4D",
  cardiff: "#00A9E0",
  ospreys: "#3D4E60",
  scarlets: "#C8102E",
  dragons: "#F5B700",
  stormers: "#002776",
  bulls: "#0066CC",
  sharks: "#1C1C1C",
  lions: "#E30613",
  glasgow: "#5CB8E0",
  edinburgh: "#241773",
  benetton: "#007A3D",
  zebre: "#003D7A",
};

/** Uppercase label on coloured tile (match schedule graphics) */
const BANNER_LABELS: Partial<Record<TeamSlug, string>> = {
  sharks: "SHARKS",
  lions: "FIDELITY SECUREDRIVE LIONS",
  bulls: "VODACOM BULLS",
  stormers: "DHL STORMERS",
  benetton: "BENETTON",
  zebre: "ZEBRE PARMA",
};

export interface FixtureTeamView {
  slug: TeamSlug;
  name: string;
  logo: string;
  bannerColor: string;
  bannerLabel: string;
  /** Dark text on light banners */
  lightBanner: boolean;
}

const LIGHT_BANNERS: Partial<Record<TeamSlug, true>> = {
  dragons: true,
};

export function getFixtureTeam(slug: TeamSlug): FixtureTeamView {
  const name = SLUG_TO_TEAM_NAME[slug];
  const team = teams.find((t) => t.name === name);
  if (!team) {
    throw new Error(`Team not found for slug: ${slug}`);
  }
  return {
    slug,
    name: team.name,
    logo: team.logo,
    bannerColor: BANNER_COLORS[slug],
    bannerLabel: (BANNER_LABELS[slug] ?? team.name).toUpperCase(),
    lightBanner: !!LIGHT_BANNERS[slug],
  };
}
