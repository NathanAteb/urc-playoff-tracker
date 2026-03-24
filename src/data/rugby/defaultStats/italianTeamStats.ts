
import { Team } from '@/types/rugby';
import { italianTeams } from '../italianTeams';

// Create a mapping from team name to original team data for reference
const italianTeamMap = new Map<string, Team>();
italianTeams.forEach(team => {
  italianTeamMap.set(team.name, team);
});

// 2025/26 season - base stats after Round 13, no rounds locked yet
export const defaultItalianTeamStats: Team[] = [
  {
    ...italianTeamMap.get("BENETTON RUGBY")!,
    position: 12,
    played: 13,
    won: 5,
    drawn: 2,
    lost: 6,
    bPoints: 4,
    points: 28,
    originalPosition: 12,
    originalWon: 5,
    originalDrawn: 2,
    originalLost: 6,
    originalBPoints: 4,
    originalPoints: 28,
    originalPlayed: 13
  },
  {
    ...italianTeamMap.get("ZEBRE PARMA")!,
    position: 16,
    played: 13,
    won: 2,
    drawn: 0,
    lost: 11,
    bPoints: 4,
    points: 12,
    originalPosition: 16,
    originalWon: 2,
    originalDrawn: 0,
    originalLost: 11,
    originalBPoints: 4,
    originalPoints: 12,
    originalPlayed: 13
  }
];
