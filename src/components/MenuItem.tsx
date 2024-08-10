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
    <li className={`menu-item ${isActive ? "active" : ""}`}>
      {icon}
      <span>{text}</span>
    </li>
  );
};

export default MenuItem;
//used online information to get to icons.
