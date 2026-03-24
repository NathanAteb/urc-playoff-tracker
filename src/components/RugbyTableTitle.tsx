
import React from 'react';

const RugbyTableTitle = () => {
  return (
    <div className="bg-[#0F1A2A] text-white p-3 sm:p-4 rounded-md flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
      <h1 className="text-lg sm:text-2xl font-bold text-white leading-tight">
        URC - PLAYOFF TRACKER
      </h1>
      <span className="text-xs sm:text-sm opacity-80">H = Home | A = Away</span>
    </div>
  );
};

export default RugbyTableTitle;
