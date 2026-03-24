
import React from 'react';
import TeamLogo from './TeamLogo';

interface TeamLogoByNameProps { 
  teamName: string; 
  clickState?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  onLogoClick?: () => void;
}

const TeamLogoByName: React.FC<TeamLogoByNameProps> = ({ 
  teamName, 
  clickState = 0,
  onLogoClick
}) => {
  const getLogoPath = (name: string): string => {
    if (name.includes("SHARKS")) return "/lovable-uploads/f08246ae-a28c-4656-b741-ff9aba91938e.png";
    if (name.includes("ULSTER")) return "/lovable-uploads/fa384185-f98a-44ec-b67f-689b44e7f649.png";
    if (name.includes("SCARLETS")) return "/lovable-uploads/31daceb3-d588-4a10-a201-01736be99081.png";
    if (name.includes("ZEBRE")) return "/lovable-uploads/0b1563c6-075b-4582-b344-774a1f29fcaf.png";
    if (name.includes("GLASGOW")) return "/lovable-uploads/b1f396b7-b60b-43a7-a296-209bf4ac359c.png";
    if (name.includes("BENETTON")) return "/lovable-uploads/12c208fe-6383-4f05-99f8-74e03bcfe4e1.png";
    if (name.includes("EDINBURGH")) return "/lovable-uploads/7f22dc20-ef93-459a-93c6-f10937185b16.png";
    if (name.includes("CONNACHT")) return "/lovable-uploads/4c35e6d8-89cc-42f1-8a69-57ee9ea11fab.png";
    if (name.includes("LIONS")) return "/lovable-uploads/ebf12532-4296-4249-a751-0b15134e755d.png";
    if (name.includes("DRAGONS")) return "/lovable-uploads/1f9a3147-975f-489a-979f-a15b83327e0d.png";
    if (name.includes("CARDIFF")) return "/lovable-uploads/5a31036d-054a-4381-bd91-18e33b396593.png";
    if (name.includes("OSPREYS")) return "/lovable-uploads/127bb777-ded9-4dab-a8da-dfbf43977f3b.png";
    if (name.includes("LEINSTER")) return "/lovable-uploads/ac011cbe-9026-4f32-905b-a14739ef8703.png";
    if (name.includes("MUNSTER")) return "/lovable-uploads/7e267e2e-4735-4b81-9336-69a7c55ee435.png";
    if (name.includes("BULLS")) return "/lovable-uploads/8b771e60-079f-4579-bb6f-6207d18fb138.png";
    if (name.includes("STORMERS")) return "/lovable-uploads/ab6e373f-dd71-412b-a4a1-3e8d8a1ff88e.png";
    
    return "";
  };

  const logoPath = getLogoPath(teamName);
  
  if (!logoPath) {
    return <span className="text-xs">{teamName}</span>;
  }
  
  return (
    <TeamLogo 
      logo={logoPath} 
      name={teamName} 
      size="medium" 
      onClick={onLogoClick}
      ringState={clickState}
    />
  );
};

export default TeamLogoByName;
