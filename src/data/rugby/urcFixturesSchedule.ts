import type { TeamSlug } from "./teamFixtureMeta";

export type BroadcasterKey = "premier" | "s4c";

export interface ScheduledFixture {
  home: TeamSlug;
  away: TeamSlug;
  time: string;
  venue: string;
  broadcasters: BroadcasterKey[];
}

export interface FixtureDateGroup {
  dateLabel: string;
  matches: ScheduledFixture[];
}

export interface FixtureRoundBlock {
  roundLabel: string;
  dateGroups: FixtureDateGroup[];
}

export interface KnockoutMatch {
  time: string;
  venue: string;
  broadcasters: BroadcasterKey[];
}

export interface KnockoutBlock {
  stageLabel: string;
  dateRight: string;
  matches: KnockoutMatch[];
}

export const leagueRounds: FixtureRoundBlock[] = [
  {
    roundLabel: "ROUND 14",
    dateGroups: [
      {
        dateLabel: "Friday 27 March 2026",
        matches: [
          { home: "sharks", away: "cardiff", time: "17:00", venue: "Hollywoodbets Kings Park", broadcasters: ["premier"] },
          { home: "glasgow", away: "benetton", time: "19:45", venue: "Scotstoun Stadium", broadcasters: ["premier"] },
          { home: "leinster", away: "scarlets", time: "19:45", venue: "Aviva Stadium", broadcasters: ["premier", "s4c"] },
        ],
      },
      {
        dateLabel: "Saturday 28 March 2026",
        matches: [
          { home: "bulls", away: "munster", time: "12:00", venue: "Loftus Versfeld", broadcasters: ["premier"] },
          { home: "connacht", away: "ospreys", time: "14:15", venue: "Dexcom Stadium", broadcasters: ["premier"] },
          { home: "lions", away: "dragons", time: "14:30", venue: "Ellis Park", broadcasters: ["premier"] },
          { home: "stormers", away: "edinburgh", time: "17:00", venue: "DHL Stadium", broadcasters: ["premier"] },
          { home: "zebre", away: "ulster", time: "19:45", venue: "Stadio Sergio Lanfranchi", broadcasters: ["premier"] },
        ],
      },
    ],
  },
  {
    roundLabel: "ROUND 15",
    dateGroups: [
      {
        dateLabel: "Friday 17 April 2026",
        matches: [
          { home: "edinburgh", away: "zebre", time: "19:45", venue: "Hive Stadium", broadcasters: ["premier"] },
          { home: "ulster", away: "leinster", time: "19:45", venue: "Affidea Stadium", broadcasters: ["premier"] },
        ],
      },
      {
        dateLabel: "Saturday 18 April 2026",
        matches: [
          { home: "stormers", away: "connacht", time: "12:45", venue: "DHL Stadium", broadcasters: ["premier"] },
          { home: "lions", away: "glasgow", time: "15:00", venue: "Ellis Park", broadcasters: ["premier"] },
        ],
      },
    ],
  },
  {
    roundLabel: "ROUND 16",
    dateGroups: [
      {
        dateLabel: "Friday 24 April 2026",
        matches: [
          { home: "cardiff", away: "ospreys", time: "19:00", venue: "Cardiff Arms Park", broadcasters: ["premier"] },
          { home: "edinburgh", away: "sharks", time: "19:45", venue: "Hive Stadium", broadcasters: ["premier"] },
          { home: "zebre", away: "dragons", time: "19:45", venue: "Stadio Sergio Lanfranchi", broadcasters: ["premier"] },
        ],
      },
      {
        dateLabel: "Saturday 25 April 2026",
        matches: [
          { home: "stormers", away: "glasgow", time: "12:45", venue: "DHL Stadium", broadcasters: ["premier"] },
          { home: "lions", away: "connacht", time: "15:00", venue: "Ellis Park", broadcasters: ["premier"] },
          { home: "munster", away: "ulster", time: "17:30", venue: "Thomond Park", broadcasters: ["premier"] },
          { home: "scarlets", away: "bulls", time: "19:45", venue: "Parc y Scarlets", broadcasters: ["premier"] },
          { home: "benetton", away: "leinster", time: "19:45", venue: "Stadio Monigo", broadcasters: ["premier"] },
        ],
      },
    ],
  },
  {
    roundLabel: "ROUND 17",
    dateGroups: [
      {
        dateLabel: "Friday 8 May 2026",
        matches: [
          { home: "glasgow", away: "cardiff", time: "19:45", venue: "Scotstoun Stadium", broadcasters: ["premier"] },
          { home: "ulster", away: "stormers", time: "19:45", venue: "Affidea Stadium", broadcasters: ["premier"] },
        ],
      },
      {
        dateLabel: "Saturday 9 May 2026",
        matches: [
          { home: "bulls", away: "zebre", time: "12:45", venue: "Loftus Versfeld", broadcasters: ["premier"] },
          { home: "sharks", away: "benetton", time: "15:00", venue: "Hollywoodbets Kings Park", broadcasters: ["premier"] },
          { home: "ospreys", away: "scarlets", time: "17:30", venue: "Swansea.com Stadium", broadcasters: ["premier"] },
          { home: "leinster", away: "lions", time: "17:30", venue: "Aviva Stadium", broadcasters: ["premier"] },
          { home: "dragons", away: "edinburgh", time: "19:45", venue: "Rodney Parade", broadcasters: ["premier"] },
          { home: "connacht", away: "munster", time: "19:45", venue: "Dexcom Stadium", broadcasters: ["premier"] },
        ],
      },
    ],
  },
  {
    roundLabel: "ROUND 18",
    dateGroups: [
      {
        dateLabel: "Friday 15 May 2026",
        matches: [
          { home: "cardiff", away: "stormers", time: "19:45", venue: "Cardiff Arms Park", broadcasters: ["premier"] },
          { home: "ulster", away: "glasgow", time: "19:45", venue: "Affidea Stadium", broadcasters: ["premier"] },
          { home: "edinburgh", away: "connacht", time: "19:45", venue: "Hive Stadium", broadcasters: ["premier"] },
        ],
      },
      {
        dateLabel: "Saturday 16 May 2026",
        matches: [
          { home: "sharks", away: "zebre", time: "12:45", venue: "Hollywoodbets Kings Park", broadcasters: ["premier"] },
          { home: "bulls", away: "benetton", time: "15:00", venue: "Loftus Versfeld", broadcasters: ["premier"] },
          { home: "leinster", away: "ospreys", time: "17:15", venue: "Aviva Stadium", broadcasters: ["premier"] },
          { home: "scarlets", away: "dragons", time: "17:15", venue: "Parc y Scarlets", broadcasters: ["premier"] },
          { home: "munster", away: "lions", time: "19:45", venue: "Thomond Park", broadcasters: ["premier"] },
        ],
      },
    ],
  },
];

export const knockoutFixtures: KnockoutBlock[] = [
  {
    stageLabel: "QUARTER-FINALS",
    dateRight: "Saturday 30 May 2026",
    matches: Array.from({ length: 4 }, () => ({
      time: "TBC",
      venue: "TBC",
      broadcasters: ["premier"] as BroadcasterKey[],
    })),
  },
  {
    stageLabel: "SEMI-FINALS",
    dateRight: "Saturday 6 June 2026",
    matches: Array.from({ length: 2 }, () => ({
      time: "TBC",
      venue: "TBC",
      broadcasters: ["premier"] as BroadcasterKey[],
    })),
  },
  {
    stageLabel: "GRAND FINAL",
    dateRight: "Saturday 20 June 2026",
    matches: [
      {
        time: "TBC",
        venue: "TBC",
        broadcasters: ["premier"] as BroadcasterKey[],
      },
    ],
  },
];
