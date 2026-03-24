
import { Team } from '@/types/rugby';
import { scottishTeams } from '../scottishTeams';

// Create a mapping from team name to original team data for reference
const scottishTeamMap = new Map<string, Team>();
scottishTeams.forEach(team => {
  scottishTeamMap.set(team.name, team);
});

// 2025/26 season - base stats after Round 13, no rounds locked yet
export const defaultScottishTeamStats: Team[] = [
  {
    ...scottishTeamMap.get("GLASGOW WARRIORS")!,
    position: 1,
    played: 13,
    won: 10,
    drawn: 0,
    lost: 3,
    bPoints: 10,
    points: 50,
    originalPosition: 1,
    originalWon: 10,
    originalDrawn: 0,
    originalLost: 3,
    originalBPoints: 10,
    originalPoints: 50,
    originalPlayed: 13
  },
  {
    ...scottishTeamMap.get("EDINBURGH RUGBY")!,
    position: 13,
    played: 13,
    won: 4,
    drawn: 0,
    lost: 9,
    bPoints: 7,
    points: 23,
    originalPosition: 13,
    originalWon: 4,
    originalDrawn: 0,
    originalLost: 9,
    originalBPoints: 7,
    originalPoints: 23,
    originalPlayed: 13
  }
];
