import React from "react";

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  isActive = false,
}) => {
  return (
    <li
      className={`flex items-center w-[307px] h-[69px] px-5 py-4 gap-4 ${
        isActive ? "bg-blue-700" : "bg-blue-800"
      } text-white hover:bg-blue-600 transition-colors`}
    >
      <span>{icon}</span>
      <span className="text-white">{text}</span>
    </li>
  );
};

export default MenuItem;
