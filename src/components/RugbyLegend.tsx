
import React from 'react';

const RugbyLegend = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-bold text-base mb-2">Legend</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#ff0000]"></div>
            <span className="text-sm">Loss (No Points)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#ff5252]"></div>
            <span className="text-sm">Losing Bonus Point (1 point)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#ff9191]"></div>
            <span className="text-sm">Losing Bonus + Try Bonus (2 points)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#ffe57b]"></div>
            <span className="text-sm">Draw (2 points)</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#ffcd00]"></div>
            <span className="text-sm">Draw + Try Bonus (3 points)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#9fff9d]"></div>
            <span className="text-sm">Win (4 points)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#05ff00]"></div>
            <span className="text-sm">Win + Try Bonus (5 points)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
              <span className="text-xs">H/A</span>
            </div>
            <span className="text-sm">Home or Away fixture</span>
          </div>
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-500">
        <p>Click on a team logo in the fixtures columns to cycle through different match results.</p>
        <p>Teams can be reordered by dragging the position number.</p>
        <p>Use the "Lock" checkboxes to prevent changes to specific fixture columns.</p>
      </div>
    </div>
  );
};

export default RugbyLegend;
