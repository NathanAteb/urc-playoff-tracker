
import { Team } from '@/types/rugby';
import { irishTeams } from '../irishTeams';

// Create a mapping from team name to original team data for reference
const irishTeamMap = new Map<string, Team>();
irishTeams.forEach(team => {
  irishTeamMap.set(team.name, team);
});

// 2025/26 season - base stats after Round 13, no rounds locked yet
export const defaultIrishTeamStats: Team[] = [
  {
    ...irishTeamMap.get("LEINSTER RUGBY")!,
    position: 4,
    played: 13,
    won: 8,
    drawn: 0,
    lost: 5,
    bPoints: 9,
    points: 41,
    originalPosition: 4,
    originalWon: 8,
    originalDrawn: 0,
    originalLost: 5,
    originalBPoints: 9,
    originalPoints: 41,
    originalPlayed: 13
  },
  {
    ...irishTeamMap.get("MUNSTER RUGBY")!,
    position: 6,
    played: 13,
    won: 8,
    drawn: 0,
    lost: 5,
    bPoints: 7,
    points: 39,
    originalPosition: 6,
    originalWon: 8,
    originalDrawn: 0,
    originalLost: 5,
    originalBPoints: 7,
    originalPoints: 39,
    originalPlayed: 13
  },
  {
    ...irishTeamMap.get("ULSTER RUGBY")!,
    position: 3,
    played: 13,
    won: 8,
    drawn: 0,
    lost: 5,
    bPoints: 10,
    points: 42,
    originalPosition: 3,
    originalWon: 8,
    originalDrawn: 0,
    originalLost: 5,
    originalBPoints: 10,
    originalPoints: 42,
    originalPlayed: 13
  },
  {
    ...irishTeamMap.get("CONNACHT RUGBY")!,
    position: 9,
    played: 13,
    won: 6,
    drawn: 0,
    lost: 7,
    bPoints: 11,
    points: 35,
    originalPosition: 9,
    originalWon: 6,
    originalDrawn: 0,
    originalLost: 7,
    originalBPoints: 11,
    originalPoints: 35,
    originalPlayed: 13
  }
];
