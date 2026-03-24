
import { Team } from '@/types/rugby';
import { resetTeamStats } from './teamStatsUtils';

// Apply stats changes based on fixture states
export const applyStatsChanges = (
  fixtureIndex: number, 
  newState: number, 
  previousState: number,
  localTeam: Team,
  team: Team,
  fixtureClickStates: Array<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>,
  lockedFixtures?: boolean[]
): Team => {
  let adjustedTeam = { ...localTeam };
  
  // If this fixture is locked and we're trying to change its state, ignore the change
  if (lockedFixtures && lockedFixtures[fixtureIndex] && newState !== previousState) {
    return adjustedTeam;
  }
  
  if (previousState > 0) {
    // Undo the effects of the previous state
    switch(previousState) {
      case 1: // Loss - Red
        adjustedTeam.lost -= 1;
        break;
      case 2: // Losing Bonus - Light Red
        adjustedTeam.lost -= 1;
        adjustedTeam.bPoints -= 1;
        adjustedTeam.points -= 1;
        break;
      case 3: // Losing Bonus + 4T - Light Red with hash
        adjustedTeam.lost -= 1;
        adjustedTeam.bPoints -= 2;
        adjustedTeam.points -= 2;
        break;
      case 4: // Draw - Yellow
        adjustedTeam.drawn -= 1;
        adjustedTeam.points -= 2;
        break;
      case 5: // Draw + 4T - Yellow with hash
        adjustedTeam.drawn -= 1;
        adjustedTeam.bPoints -= 1;
        adjustedTeam.points -= 3;
        break;
      case 6: // Win - Green
        adjustedTeam.won -= 1;
        adjustedTeam.points -= 4;
        break;
      case 7: // Win BP - Dark Green
        adjustedTeam.won -= 1;
        adjustedTeam.bPoints -= 1;
        adjustedTeam.points -= 5;
        break;
    }
  }
  
  // Now apply the new state
  if (newState > 0) {
    switch(newState) {
      case 1: // Loss - Red
        adjustedTeam.lost += 1;
        break;
      case 2: // Losing Bonus - Light Red
        adjustedTeam.lost += 1;
        adjustedTeam.bPoints += 1;
        adjustedTeam.points += 1;
        break;
      case 3: // Losing Bonus + 4T - Light Red with hash
        adjustedTeam.lost += 1;
        adjustedTeam.bPoints += 2;
        adjustedTeam.points += 2;
        break;
      case 4: // Draw - Yellow
        adjustedTeam.drawn += 1;
        adjustedTeam.points += 2;
        break;
      case 5: // Draw + 4T - Yellow with hash
        adjustedTeam.drawn += 1;
        adjustedTeam.bPoints += 1;
        adjustedTeam.points += 3;
        break;
      case 6: // Win - Green
        adjustedTeam.won += 1;
        adjustedTeam.points += 4;
        break;
      case 7: // Win BP - Dark Green
        adjustedTeam.won += 1;
        adjustedTeam.bPoints += 1;
        adjustedTeam.points += 5;
        break;
    }
  }
  
  // If we've returned to state 0 and this is the only fixture with a state,
  // then we reset to original values - only if no fixtures are locked
  const allZeroExceptCurrent = fixtureClickStates.every((state, idx) => 
    idx === fixtureIndex || state === 0
  );
  
  const hasLockedFixtures = lockedFixtures && lockedFixtures.some(isLocked => isLocked);
  
  if (newState === 0 && allZeroExceptCurrent && previousState !== 0 && !hasLockedFixtures) {
    adjustedTeam = resetTeamStats(team, adjustedTeam);
  }
  
  return adjustedTeam;
};
