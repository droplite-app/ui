import React from "react";

interface DropdownMenuProps {
  children: React.ReactNode;
  onClick?: () => void; 
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, onClick }) => {
  return (
    <div className="menu-item hover:bg-blue-100" onClick={onClick}>
      <a
        className="menu-link block px-4 py-2 text-sky-900 hover:text-sky-800"
        href={onClick ? "#" : undefined} 
      >
        {children}
      </a>
    </div>
  );
};

export default DropdownMenu;
