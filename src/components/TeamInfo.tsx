
import React from 'react';
import { TableCell } from "@/components/ui/table";
import TeamLogo from './TeamLogo';

interface TeamInfoProps {
  logo: string;
  name: string;
}

const TeamInfo: React.FC<TeamInfoProps> = ({ logo, name }) => {
  return (
    <TableCell className="sticky left-12 bg-background z-10 py-2">
      <div className="flex items-center gap-3">
        <TeamLogo 
          logo={logo} 
          name={name}
        />
        <span className="font-semibold">{name}</span>
      </div>
    </TableCell>
  );
};

export default TeamInfo;
