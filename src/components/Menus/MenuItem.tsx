import React from "react";
import classNames from "classnames";

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string; 
  isActive?: boolean;
  onClick?: () => void; 
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, href, onClick }) => {
  const liClassName = classNames(
    "flex items-center w-[307px] h-[69px] px-5 py-4 gap-4 bg-sky-900 text-white hover:bg-sky-700 transition-colors"
  );

  return (
    <li className={liClassName} onClick={onClick}>
      <a
        href={onClick ? "#" : href} 
        className="flex items-center text-white no-underline w-full h-full"
      >
        <span>{icon}</span>
        <span className="ml-4">{text}</span>
      </a>
    </li>
  );
};

export default MenuItem;
