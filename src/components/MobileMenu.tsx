import React from "react";

interface MobileMenuProps {
  icon: React.ReactNode; // icon için tür
  text: string; // text için tür
} //online

const MobileMenu: React.FC<MobileMenuProps> = ({ icon, text }) => {
  return (
    <div className="menu-item">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default MobileMenu;
