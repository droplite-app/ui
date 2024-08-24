import React from 'react';
import HeaderControls from './HeaderControls';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={`w-full flex justify-end items-center p-16 h-[60px] bg-transparent relative z-10 ${className}`}>
      {/* Header Controls: Search Input + Avatar Dropdown */}
      <HeaderControls size="small" />
    </div>
  );
};

export default Header;
