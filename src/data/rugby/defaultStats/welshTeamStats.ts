
import { Team } from '@/types/rugby';
import { welshTeams } from '../welshTeams';

// Create a mapping from team name to original team data for reference
const welshTeamMap = new Map<string, Team>();
welshTeams.forEach(team => {
  welshTeamMap.set(team.name, team);
});

// 2025/26 season - base stats after Round 13, no rounds locked yet
export const defaultWelshTeamStats: Team[] = [
  {
    ...welshTeamMap.get("CARDIFF RUGBY")!,
    position: 5,
    played: 13,
    won: 8,
    drawn: 0,
    lost: 5,
    bPoints: 8,
    points: 40,
    originalPosition: 5,
    originalWon: 8,
    originalDrawn: 0,
    originalLost: 5,
    originalBPoints: 8,
    originalPoints: 40,
    originalPlayed: 13
  },
  {
    ...welshTeamMap.get("OSPREYS")!,
    position: 10,
    played: 13,
    won: 5,
    drawn: 2,
    lost: 6,
    bPoints: 5,
    points: 29,
    originalPosition: 10,
    originalWon: 5,
    originalDrawn: 2,
    originalLost: 6,
    originalBPoints: 5,
    originalPoints: 29,
    originalPlayed: 13
  },
  {
    ...welshTeamMap.get("SCARLETS")!,
    position: 14,
    played: 13,
    won: 4,
    drawn: 1,
    lost: 8,
    bPoints: 3,
    points: 21,
    originalPosition: 14,
    originalWon: 4,
    originalDrawn: 1,
    originalLost: 8,
    originalBPoints: 3,
    originalPoints: 21,
    originalPlayed: 13
  },
  {
    ...welshTeamMap.get("DRAGONS RFC")!,
    position: 15,
    played: 13,
    won: 2,
    drawn: 3,
    lost: 8,
    bPoints: 6,
    points: 20,
    originalPosition: 15,
    originalWon: 2,
    originalDrawn: 3,
    originalLost: 8,
    originalBPoints: 6,
    originalPoints: 20,
    originalPlayed: 13
  }
];
