
import React from 'react';
import { TableCell } from "@/components/ui/table";
import TeamLogoByName from './TeamLogoByName';
import { getFixtureInfo, displayVenue, getVenueForSpecialCase } from '@/utils/fixtureUtils';
import { Lock } from 'lucide-react';

interface StandardFixtureCellProps {
  fixture: string | undefined;
  index: number;
  teamName: string;
  clickState: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  onLogoClick: () => void;
  isLocked?: boolean;
}

const StandardFixtureCell: React.FC<StandardFixtureCellProps> = ({
  fixture,
  index,
  teamName,
  clickState,
  onLogoClick,
  isLocked = false
}) => {
  const fixtureInfo = getFixtureInfo(fixture);
  
  // Apply special venue rules based on team and index
  const venue = getVenueForSpecialCase(teamName, fixtureInfo.team, index, fixtureInfo);
  
  // Define state labels based on click state
  const getStateLabel = () => {
    switch(clickState) {
      case 1: return "Loss";
      case 2: return "Loss BP";
      case 3: return "Loss 2BP";
      case 4: return "Draw";
      case 5: return "Draw BP";
      case 6: return "Win";
      case 7: return "Win BP";
      default: return "";
    }
  };
  
  return (
    <TableCell className="text-center py-2 relative">
      {fixtureInfo.team ? (
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-2">
            <div className="relative">
              <TeamLogoByName 
                teamName={fixtureInfo.team} 
                clickState={clickState}
                onLogoClick={onLogoClick}
              />
              {isLocked && (
                <div className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-0.5">
                  <Lock size={12} className="text-gray-500" />
                </div>
              )}
            </div>
            {clickState > 0 && (
              <div className="text-xs font-medium px-2 py-0.5 bg-gray-100 rounded">
                {getStateLabel()}
              </div>
            )}
          </div>
          <span className="text-xs font-medium">{venue === 'H' ? 'H' : venue === 'A' ? 'A' : displayVenue(venue)}</span>
        </div>
      ) : (
        "-"
      )}
    </TableCell>
  );
};

export default StandardFixtureCell;
