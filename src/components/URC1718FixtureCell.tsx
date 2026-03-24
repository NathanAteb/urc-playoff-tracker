
import React from 'react';
import { TableCell } from "@/components/ui/table";
import TeamLogoByName from './TeamLogoByName';
import { urc1718Fixtures } from '@/data/rugby/urc1718Fixtures';
import { Lock } from 'lucide-react';

interface URC1718FixtureCellProps {
  teamName: string;
  index: number; // 3 for URC17, 4 for URC18
  clickState?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  onLogoClick?: () => void;
  isLocked?: boolean;
}

const URC1718FixtureCell: React.FC<URC1718FixtureCellProps> = ({ 
  teamName, 
  index,
  clickState = 0,
  onLogoClick,
  isLocked = false
}) => {
  // Get the fixture data for the team
  const columnName = index === 3 ? "URC17" : "URC18";
  const fixtureData = urc1718Fixtures[teamName]?.[columnName as "URC17" | "URC18"];
  
  if (fixtureData) {
    return (
      <TableCell className="text-center py-2">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center relative">
            <TeamLogoByName 
              teamName={fixtureData.team}
              clickState={clickState}
              onLogoClick={!isLocked ? onLogoClick : undefined} 
            />
            {isLocked && (
              <div className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-0.5">
                <Lock size={12} className="text-gray-500" />
              </div>
            )}
          </div>
          <span className="text-xs font-medium">{fixtureData.venue}</span>
        </div>
      </TableCell>
    );
  }

  return <TableCell className="text-center py-2">-</TableCell>;
};

export default URC1718FixtureCell;
