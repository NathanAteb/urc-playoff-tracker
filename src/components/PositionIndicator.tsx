
import React from 'react';
import { TableCell } from "@/components/ui/table";
import { GripVertical, ArrowUp, ArrowDown } from 'lucide-react';

interface PositionIndicatorProps {
  position: number;
  originalPosition?: number;
  showMovementIndicator: boolean;
  attributes: any;
  listeners: any;
}

const PositionIndicator: React.FC<PositionIndicatorProps> = ({ 
  position, 
  originalPosition,
  showMovementIndicator,
  attributes,
  listeners
}) => {
  // Determine if position has moved up, down, or stayed the same
  let moveIndicator = null;
  
  if (showMovementIndicator && originalPosition && originalPosition !== position) {
    if (position < originalPosition) {
      // Moved up (improved position)
      moveIndicator = (
        <div className="absolute -right-4 -top-1">
          <ArrowUp size={16} className="text-green-600" />
        </div>
      );
    } else if (position > originalPosition) {
      // Moved down (worsened position)
      moveIndicator = (
        <div className="absolute -right-4 -top-1">
          <ArrowDown size={16} className="text-red-500" />
        </div>
      );
    }
  }

  return (
    <TableCell className="sticky left-0 bg-background z-10 py-2 w-12">
      <div className="flex items-center relative">
        <div className="flex items-center justify-between w-full">
          <span>{position}</span>
          <div 
            {...attributes} 
            {...listeners}
            className="cursor-grab active:cursor-grabbing ml-2 text-gray-400 hover:text-gray-700"
          >
            <GripVertical size={16} />
          </div>
        </div>
        {moveIndicator}
      </div>
    </TableCell>
  );
};

export default PositionIndicator;
