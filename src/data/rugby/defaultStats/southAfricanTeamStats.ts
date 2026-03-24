
import { Team } from '@/types/rugby';
import { southAfricanTeams } from '../southAfricanTeams';

// Create a mapping from team name to original team data for reference
const southAfricanTeamMap = new Map<string, Team>();
southAfricanTeams.forEach(team => {
  southAfricanTeamMap.set(team.name, team);
});

// 2025/26 season - base stats after Round 13, no rounds locked yet
export const defaultSouthAfricanTeamStats: Team[] = [
  {
    ...southAfricanTeamMap.get("DHL STORMERS")!,
    position: 2,
    played: 13,
    won: 10,
    drawn: 0,
    lost: 3,
    bPoints: 6,
    points: 46,
    originalPosition: 2,
    originalWon: 10,
    originalDrawn: 0,
    originalLost: 3,
    originalBPoints: 6,
    originalPoints: 46,
    originalPlayed: 13
  },
  {
    ...southAfricanTeamMap.get("VODACOM BULLS")!,
    position: 8,
    played: 13,
    won: 7,
    drawn: 0,
    lost: 6,
    bPoints: 7,
    points: 35,
    originalPosition: 8,
    originalWon: 7,
    originalDrawn: 0,
    originalLost: 6,
    originalBPoints: 7,
    originalPoints: 35,
    originalPlayed: 13
  },
  {
    ...southAfricanTeamMap.get("HOLLYWOODBETS SHARKS")!,
    position: 11,
    played: 13,
    won: 5,
    drawn: 1,
    lost: 7,
    bPoints: 7,
    points: 29,
    originalPosition: 11,
    originalWon: 5,
    originalDrawn: 1,
    originalLost: 7,
    originalBPoints: 7,
    originalPoints: 29,
    originalPlayed: 13
  },
  {
    ...southAfricanTeamMap.get("EMIRATES LIONS")!,
    position: 7,
    played: 13,
    won: 7,
    drawn: 1,
    lost: 5,
    bPoints: 8,
    points: 38,
    originalPosition: 7,
    originalWon: 7,
    originalDrawn: 1,
    originalLost: 5,
    originalBPoints: 8,
    originalPoints: 38,
    originalPlayed: 13
  }
];
