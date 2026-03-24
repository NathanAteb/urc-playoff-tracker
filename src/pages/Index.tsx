
import React from 'react';
import RugbyStandingsTable from "@/components/RugbyStandingsTable";
import RugbyLegend from "@/components/RugbyLegend";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-[1400px] mx-auto">
        <RugbyStandingsTable />
        <div className="mt-6">
          <RugbyLegend />
        </div>
      </div>
    </div>
  );
};

export default Index;
