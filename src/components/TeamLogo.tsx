
import React from 'react';

interface TeamLogoProps {
  logo: string;
  name: string;
  size?: 'small' | 'medium';
  onClick?: () => void;
  ringState?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

const TeamLogo: React.FC<TeamLogoProps> = ({ 
  logo, 
  name, 
  size = 'medium',
  onClick,
  ringState = 0
}) => {
  const sizeClass = size === 'small' ? 'w-5 h-5' : 'w-7 h-7';
  
  // Determine the ring class based on the state
  const getRingClass = () => {
    switch (ringState) {
      case 1:
        return 'ring-2 ring-[#ff0000]'; // Loss - Red
      case 2:
        return 'ring-2 ring-[#ff5252]'; // Losing Bonus - Light Red
      case 3:
        return 'ring-2 ring-[#ff9191]'; // Losing Bonus + 4T - Light Red with hash
      case 4:
        return 'ring-2 ring-[#ffe57b]'; // Draw - Yellow
      case 5:
        return 'ring-2 ring-[#ffcd00]'; // Draw + 4T - Yellow with hash
      case 6:
        return 'ring-2 ring-[#9fff9d]'; // Win - Green
      case 7:
        return 'ring-2 ring-[#05ff00]'; // Win BP - Dark Green
      default:
        return '';
    }
  };
  
  return (
    <div 
      className="flex-shrink-0 cursor-pointer rounded-full"
      onClick={onClick}
    >
      <img 
        src={logo} 
        alt={`${name} logo`} 
        className={`${sizeClass} object-contain rounded-full ${getRingClass()}`}
      />
    </div>
  );
};

export default TeamLogo;
