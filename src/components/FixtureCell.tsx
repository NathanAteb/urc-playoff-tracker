
import React from 'react';
import URC1718FixtureCell from './URC1718FixtureCell';
import StandardFixtureCell from './StandardFixtureCell';

interface FixtureCellProps {
  fixture: string | undefined;
  index: number;
  teamName: string;
  clickState: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  onLogoClick: () => void;
  isLocked?: boolean;
}

const FixtureCell: React.FC<FixtureCellProps> = (props) => {
  const { index, teamName, clickState, onLogoClick, isLocked } = props;
  
  // Special handling for URC17 and URC18 columns
  if (index === 3 || index === 4) {
    return <URC1718FixtureCell 
      teamName={teamName} 
      index={index} 
      clickState={clickState}
      onLogoClick={onLogoClick}
      isLocked={isLocked}
    />;
  }
  
  // Standard fixture cell for all other columns
  return <StandardFixtureCell {...props} />;
};

export default FixtureCell;
