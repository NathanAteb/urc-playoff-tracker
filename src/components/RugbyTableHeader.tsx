
import React from 'react';
import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FixtureLockCheckbox from './FixtureLockCheckbox';

interface RugbyTableHeaderProps {
  lockedFixtures: boolean[];
  onFixtureLockChange: (index: number, isLocked: boolean) => void;
}

const RugbyTableHeader: React.FC<RugbyTableHeaderProps> = ({ 
  lockedFixtures, 
  onFixtureLockChange 
}) => {
  return (
    <TableHeader>
      <TableRow className="hover:bg-transparent h-12">
        <TableHead className="w-10 sticky left-0 bg-background z-10 py-3">#</TableHead>
        <TableHead className="w-40 sticky left-10 bg-background z-10 py-3">TEAM</TableHead>
        <TableHead className="w-10 py-3">PL</TableHead>
        <TableHead className="w-10 py-3">W</TableHead>
        <TableHead className="w-10 py-3">D</TableHead>
        <TableHead className="w-10 py-3">L</TableHead>
        <TableHead className="w-10 py-3">BP</TableHead>
        <TableHead className="w-10 py-3">PTS</TableHead>
        <TableHead className="w-20 text-center py-3">
          <div className="flex flex-col items-center">
            <span>URC14</span>
            <FixtureLockCheckbox 
              index={0} 
              isLocked={lockedFixtures[0]} 
              onLockChange={onFixtureLockChange} 
            />
          </div>
        </TableHead>
        <TableHead className="w-20 text-center py-3">
          <div className="flex flex-col items-center">
            <span>URC15</span>
            <FixtureLockCheckbox 
              index={1} 
              isLocked={lockedFixtures[1]} 
              onLockChange={onFixtureLockChange} 
            />
          </div>
        </TableHead>
        <TableHead className="w-20 text-center py-3">
          <div className="flex flex-col items-center">
            <span>URC16</span>
            <FixtureLockCheckbox 
              index={2} 
              isLocked={lockedFixtures[2]} 
              onLockChange={onFixtureLockChange} 
            />
          </div>
        </TableHead>
        <TableHead className="w-20 text-center py-3">
          <div className="flex flex-col items-center">
            <span>URC17</span>
            <FixtureLockCheckbox 
              index={3} 
              isLocked={lockedFixtures[3]} 
              onLockChange={onFixtureLockChange} 
            />
          </div>
        </TableHead>
        <TableHead className="w-20 text-center py-3">
          <div className="flex flex-col items-center">
            <span>URC18</span>
            <FixtureLockCheckbox 
              index={4} 
              isLocked={lockedFixtures[4]} 
              onLockChange={onFixtureLockChange} 
            />
          </div>
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default RugbyTableHeader;
