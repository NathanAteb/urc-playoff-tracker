
import React from 'react';
import { TableCell } from "@/components/ui/table";
import { Team } from '@/types/rugby';

interface TeamStatsProps {
  team: Team;
}

const TeamStats: React.FC<TeamStatsProps> = ({ team }) => {
  return (
    <>
      <TableCell className="py-2">{team.played}</TableCell>
      <TableCell className="py-2">{team.won}</TableCell>
      <TableCell className="py-2">{team.drawn}</TableCell>
      <TableCell className="py-2">{team.lost}</TableCell>
      <TableCell className="py-2">{team.bPoints}</TableCell>
      <TableCell className="font-bold py-2">{team.points}</TableCell>
    </>
  );
};

export default TeamStats;
