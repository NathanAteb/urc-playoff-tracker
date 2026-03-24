import React, { memo } from 'react';
import { TableRow } from "@/components/ui/table";
import { Team } from '@/types/rugby';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PositionIndicator from './PositionIndicator';
import TeamInfo from './TeamInfo';
import TeamStats from './TeamStats';
import TeamFixtures from './TeamFixtures';
import { useTeamStats } from '@/hooks/useTeamStats';

interface TeamRowProps {
  team: Team & { originalPosition?: number };
  showMovementIndicator?: boolean;
  onTeamUpdate?: (updatedTeam: Team) => void;
  lockedFixtures: boolean[];
}

// Use memo to prevent unnecessary re-renders
const TeamRow = memo(({ team, showMovementIndicator = false, onTeamUpdate, lockedFixtures }: TeamRowProps) => {
  const {
    localTeam,
    fixtureClickStates,
    handleFixtureLogoClick
  } = useTeamStats(team, onTeamUpdate, lockedFixtures);
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: team.name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 999 : 1,
  };

  return (
    <TableRow 
      ref={setNodeRef}
      style={style}
      key={`team-row-${team.name}`}
      className={`${team.position === 8 ? "border-b-4 border-purple-300 h-12" : "h-12"} ${isDragging ? "bg-gray-100" : ""}`}
    >
      <PositionIndicator 
        position={team.position}
        originalPosition={team.originalPosition}
        showMovementIndicator={showMovementIndicator}
        attributes={attributes}
        listeners={listeners}
      />
      
      <TeamInfo logo={team.logo} name={team.name} />
      
      <TeamStats team={localTeam} />
      
      <TeamFixtures 
        teamName={team.name}
        fixtures={team.nextFixtures}
        fixtureClickStates={fixtureClickStates}
        onFixtureLogoClick={handleFixtureLogoClick}
        lockedFixtures={lockedFixtures}
      />
    </TableRow>
  );
});

// Add a display name for debugging purposes
TeamRow.displayName = 'TeamRow';

export default TeamRow;
