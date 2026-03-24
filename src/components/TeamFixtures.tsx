
import React from 'react';
import FixtureCell from './FixtureCell';

interface TeamFixturesProps {
  teamName: string;
  fixtures: string[] | undefined;
  fixtureClickStates: Array<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  onFixtureLogoClick: (index: number) => void;
  lockedFixtures: boolean[];
}

const TeamFixtures: React.FC<TeamFixturesProps> = ({ 
  teamName, 
  fixtures, 
  fixtureClickStates, 
  onFixtureLogoClick,
  lockedFixtures
}) => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((index) => (
        <FixtureCell
          key={index}
          fixture={fixtures?.[index]}
          index={index}
          teamName={teamName}
          clickState={fixtureClickStates[index]}
          onLogoClick={() => {
            if (!lockedFixtures[index]) {
              onFixtureLogoClick(index);
            }
          }}
          isLocked={lockedFixtures[index]}
        />
      ))}
    </>
  );
};

export default TeamFixtures;
