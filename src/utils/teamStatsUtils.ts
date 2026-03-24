
import { Team } from '@/types/rugby';

// Reset team stats to original values
export const resetTeamStats = (team: Team, localTeam: Team) => {
  if (team.originalWon !== undefined) {
    return {
      ...localTeam,
      won: team.originalWon,
      drawn: team.originalDrawn || 0,
      lost: team.originalLost || 0,
      bPoints: team.originalBPoints || 0,
      points: team.originalPoints || 0
    };
  }
  return localTeam;
};

// Apply stats changes based on click state
export const applyStatsChanges = (state: number, localTeam: Team, team: Team) => {
  // Reset to original values first
  let newTeam = {
    ...localTeam,
    won: team.originalWon || 0,
    drawn: team.originalDrawn || 0,
    lost: team.originalLost || 0,
    bPoints: team.originalBPoints || 0,
    points: team.originalPoints || 0
  };

  // Apply changes based on state
  switch(state) {
    case 1: // Loss - Red
      newTeam.lost += 1;
      // Points stay the same (no bonus points)
      break;
    case 2: // Losing Bonus - Light Red
      newTeam.lost += 1;
      newTeam.bPoints += 1;
      newTeam.points += 1;
      break;
    case 3: // Losing Bonus + 4T - Light Red with hash
      newTeam.lost += 1;
      newTeam.bPoints += 2; // 1 for close loss, 1 for 4 tries
      newTeam.points += 2;
      break;
    case 4: // Draw - Yellow
      newTeam.drawn += 1;
      newTeam.points += 2; // 2 points for a draw
      break;
    case 5: // Draw + 4T - Yellow with hash
      newTeam.drawn += 1;
      newTeam.bPoints += 1; // 1 bonus point for 4 tries
      newTeam.points += 3; // 2 for draw + 1 bonus
      break;
    case 6: // Win - Green
      newTeam.won += 1;
      newTeam.points += 4; // 4 points for a win
      break;
    case 7: // Win BP - Dark Green
      newTeam.won += 1;
      newTeam.bPoints += 1; // 1 bonus point for 4 tries
      newTeam.points += 5; // 4 for win + 1 bonus
      break;
    default:
      // Reset to original
      break;
  }

  return newTeam;
};
