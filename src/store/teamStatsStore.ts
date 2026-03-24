
import { Team } from '@/types/rugby';

const STORAGE_KEY = 'urc-playoff-tracker-state';

// Type for the stored team state
export type TeamStateData = {
  stats: {
    won: number;
    drawn: number;
    lost: number;
    bPoints: number;
    points: number;
  },
  fixtureStates: Array<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>
};

type PersistedState = {
  teamStates: Record<string, TeamStateData>;
  lockedFixtures: boolean[];
  teamOrder: string[];
};

// Load persisted state from localStorage
const loadPersistedState = (): PersistedState | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PersistedState;
  } catch {
    return null;
  }
};

// Save state to localStorage
const persistState = () => {
  try {
    const teamStates: Record<string, TeamStateData> = {};
    globalTeamStates.forEach((value, key) => {
      teamStates[key] = value;
    });
    const state: PersistedState = {
      teamStates,
      lockedFixtures: _lockedFixtures,
      teamOrder: _teamOrder,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or unavailable — silently ignore
  }
};

// Hydrate the global map from persisted state
const persisted = loadPersistedState();
const globalTeamStates = new Map<string, TeamStateData>();
let _lockedFixtures: boolean[] = [false, false, false, false, false];
let _teamOrder: string[] = [];

if (persisted) {
  Object.entries(persisted.teamStates).forEach(([key, value]) => {
    globalTeamStates.set(key, value);
  });
  _lockedFixtures = persisted.lockedFixtures ?? [false, false, false, false, false];
  _teamOrder = persisted.teamOrder ?? [];
}

// Get team state from global store
export const getTeamState = (teamId: string): TeamStateData | undefined => {
  return globalTeamStates.get(teamId);
};

// Set team state in global store and persist
export const setTeamState = (teamId: string, state: TeamStateData): void => {
  globalTeamStates.set(teamId, state);
  persistState();
};

// Get/set locked fixtures
export const getLockedFixtures = (): boolean[] => [..._lockedFixtures];
export const setLockedFixtures = (locks: boolean[]): void => {
  _lockedFixtures = [...locks];
  persistState();
};

// Get/set team order (array of team names in display order)
export const getTeamOrder = (): string[] => [..._teamOrder];
export const setTeamOrder = (order: string[]): void => {
  _teamOrder = [...order];
  persistState();
};

// Clear all saved state
export const clearSavedState = (): void => {
  globalTeamStates.clear();
  _lockedFixtures = [false, false, false, false, false];
  _teamOrder = [];
  localStorage.removeItem(STORAGE_KEY);
};
