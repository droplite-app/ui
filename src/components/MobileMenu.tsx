import React from "react";

interface MobileMenuProps {
  icon: React.ReactNode;
  text: string;
  href : string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ icon, text }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-auto h-auto p-2 text-white"
    >
      <span className="text-white">{icon}</span>
      <span className="text-sm text-white">{text}</span>
    </div>
  );
};

export default MobileMenu;
