import React from "react";

interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return (
    <div className="menu-item hover:bg-blue-100">
      <a
        className="menu-link block px-4 py-2 text-sky-900 hover:text-sky-800"
        href="#"
      >
        {children}
      </a>
    </div>
  );
};

export default DropdownMenu;
