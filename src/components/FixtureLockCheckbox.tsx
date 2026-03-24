
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FixtureLockCheckboxProps {
  index: number;
  isLocked: boolean;
  onLockChange: (index: number, isLocked: boolean) => void;
}

const FixtureLockCheckbox: React.FC<FixtureLockCheckboxProps> = ({ 
  index, 
  isLocked, 
  onLockChange 
}) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Checkbox 
        id={`lock-fixture-${index}`} 
        checked={isLocked}
        onCheckedChange={(checked) => {
          onLockChange(index, checked === true);
        }}
      />
      <Label 
        htmlFor={`lock-fixture-${index}`}
        className="text-xs cursor-pointer"
      >
        Lock
      </Label>
    </div>
  );
};

export default FixtureLockCheckbox;
