
import { useEffect } from 'react';
import { Team } from '@/types/rugby';
import { resetTeamStats } from '@/utils/teamStatsUtils';
import { applyStatsChanges } from '@/utils/teamStatsUpdateUtils';
import { setTeamState } from '@/store/teamStatsStore';
import { useInitializeTeamState } from './useInitializeTeamState';

export function useTeamStats(team: Team, onTeamUpdate?: (updatedTeam: Team) => void, lockedFixtures?: boolean[]) {
  const {
    teamIdentifier,
    fixtureClickStates,
    setFixtureClickStates,
    localTeam,
    setLocalTeam
  } = useInitializeTeamState(team);
  
  // Update localTeam when team props change (e.g., position during reordering)
  useEffect(() => {
    setLocalTeam(prevTeam => {
      // Keep the stats from the previous state, only update other properties like position
      return {
        ...team,
        won: prevTeam.won,
        drawn: prevTeam.drawn,
        lost: prevTeam.lost,
        bPoints: prevTeam.bPoints,
        points: prevTeam.points,
      };
    });
  }, [team.position]);
  
  // Update global state whenever local state changes
  useEffect(() => {
    setTeamState(teamIdentifier, {
      stats: {
        won: localTeam.won,
        drawn: localTeam.drawn,
        lost: localTeam.lost,
        bPoints: localTeam.bPoints,
        points: localTeam.points
      },
      fixtureStates: [...fixtureClickStates]
    });
  }, [localTeam, fixtureClickStates, teamIdentifier]);

  // Handle team stats reset
  const handleResetTeamStats = () => {
    // Don't reset if any fixtures are locked
    if (lockedFixtures && lockedFixtures.some(isLocked => isLocked)) {
      return;
    }
    
    const resetTeam = resetTeamStats(team, localTeam);
    setLocalTeam(resetTeam);
    setFixtureClickStates([0, 0, 0, 0, 0]);
    
    // Update global state
    setTeamState(teamIdentifier, {
      stats: {
        won: resetTeam.won,
        drawn: resetTeam.drawn,
        lost: resetTeam.lost,
        bPoints: resetTeam.bPoints,
        points: resetTeam.points
      },
      fixtureStates: [0, 0, 0, 0, 0]
    });
    
    if (onTeamUpdate) {
      onTeamUpdate(resetTeam);
    }
  };

  // Handle team stats changes
  const handleApplyStatsChanges = (fixtureIndex: number, newState: number, previousState: number) => {
    const adjustedTeam = applyStatsChanges(
      fixtureIndex, 
      newState, 
      previousState, 
      localTeam, 
      team, 
      fixtureClickStates,
      lockedFixtures
    );
    
    setLocalTeam(adjustedTeam);
    
    // Update global state
    setTeamState(teamIdentifier, {
      stats: {
        won: adjustedTeam.won,
        drawn: adjustedTeam.drawn,
        lost: adjustedTeam.lost,
        bPoints: adjustedTeam.bPoints,
        points: adjustedTeam.points
      },
      fixtureStates: [...fixtureClickStates]
    });
    
    if (onTeamUpdate) {
      onTeamUpdate(adjustedTeam);
    }
    
    return adjustedTeam;
  };

  // Handle fixture logo click
  const handleFixtureLogoClick = (index: number) => {
    // Don't proceed if this fixture is locked
    if (lockedFixtures && lockedFixtures[index]) {
      return;
    }
    
    setFixtureClickStates(prevStates => {
      const newStates = [...prevStates];
      const previousState = newStates[index];
      // Cycle through states 0-7
      newStates[index] = ((newStates[index] + 1) % 8) as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      
      // Apply stat changes based on this fixture's new state, accounting for previous state
      handleApplyStatsChanges(index, newStates[index], previousState);
      
      return newStates;
    });
  };

  return {
    localTeam,
    fixtureClickStates,
    handleFixtureLogoClick,
    handleResetTeamStats
  };
}
