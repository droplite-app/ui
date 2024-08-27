import React from "react";
import HeaderControls from "./HeaderControls";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div
      className={`w-full flex justify-between items-center lg:pt-8 pr-1 h-[60px] bg-transparent relative z-10 ${className}`}
    >
      <div></div>
      {/* Header Controls: Search Input + Avatar Dropdown */}
      <div className="ml-auto pr-2">
        <HeaderControls size="small" />
      </div>
    </div>
  );
};

export default Header;
