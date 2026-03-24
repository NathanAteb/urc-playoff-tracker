
import { Team } from '@/types/rugby';
import { defaultIrishTeamStats } from './irishTeamStats';
import { defaultWelshTeamStats } from './welshTeamStats';
import { defaultItalianTeamStats } from './italianTeamStats';
import { defaultScottishTeamStats } from './scottishTeamStats';
import { defaultSouthAfricanTeamStats } from './southAfricanTeamStats';

// Combine all team stats arrays and sort by position
export const defaultTeamStats: Team[] = [
  ...defaultIrishTeamStats,
  ...defaultWelshTeamStats,
  ...defaultItalianTeamStats,
  ...defaultScottishTeamStats,
  ...defaultSouthAfricanTeamStats
].sort((a, b) => a.position - b.position);
