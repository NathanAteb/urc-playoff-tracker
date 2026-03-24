
import React from 'react';
import { TableCell } from "@/components/ui/table";
import TeamLogo from './TeamLogo';

interface TeamInfoProps {
  logo: string;
  name: string;
}

const TeamInfo: React.FC<TeamInfoProps> = ({ logo, name }) => {
  return (
    <TableCell className="sticky left-12 z-20 bg-white py-2 w-12 min-w-[3rem] sm:w-40 sm:min-w-[10rem] shadow-[4px_0_12px_-4px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-center sm:justify-start gap-0 sm:gap-3">
        <TeamLogo 
          logo={logo} 
          name={name}
        />
        <span className="hidden sm:inline font-semibold text-base truncate max-w-none" title={name}>
          {name}
        </span>
      </div>
    </TableCell>
  );
};

export default TeamInfo;
