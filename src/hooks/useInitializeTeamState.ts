
import { useState } from 'react';
import { Team } from '@/types/rugby';
import { defaultFixtureStates } from '@/data/rugby/defaultFixtureStates';
import { getTeamState } from '@/store/teamStatsStore';

// Custom hook to initialize team state from global storage or defaults
export function useInitializeTeamState(team: Team) {
  // Create a unique identifier for the team
  const teamIdentifier = team.name;
  
  // Initialize fixture click states from global state or defaults
  const [fixtureClickStates, setFixtureClickStates] = useState<Array<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>>(() => {
    const existingState = getTeamState(teamIdentifier);
    // Use saved state, default fixture state, or fallback to all zeros
    return existingState 
      ? [...existingState.fixtureStates] 
      : (defaultFixtureStates[teamIdentifier] || [0, 0, 0, 0, 0]);
  });
  
  // Initialize local team stats from global state if exists
  const [localTeam, setLocalTeam] = useState<Team>(() => {
    const existingState = getTeamState(teamIdentifier);
    if (existingState) {
      return {
        ...team,
        won: existingState.stats.won,
        drawn: existingState.stats.drawn,
        lost: existingState.stats.lost,
        bPoints: existingState.stats.bPoints,
        points: existingState.stats.points
      };
    }
    
    // Initialize original values if not already set
    if (team.originalWon === undefined) {
      team.originalWon = team.won;
      team.originalDrawn = team.drawn;
      team.originalLost = team.lost;
      team.originalBPoints = team.bPoints;
      team.originalPoints = team.points;
    }
    
    return {...team};
  });
  
  return {
    teamIdentifier,
    fixtureClickStates,
    setFixtureClickStates,
    localTeam,
    setLocalTeam
  };
}
