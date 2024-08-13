import React from "react";

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  href,
  isActive = false,
}) => {
  return (
    <li
      className={`flex items-center w-[307px] h-[69px] px-5 py-4 gap-4 ${
        isActive ? "bg-sky-900" : "bg-sky-900"
      } text-white hover:bg-sky-700 transition-colors`}
    >
      <a href={href} className="flex items-center text-white no-underline ">
        <span>{icon}</span>
      </a>

      <span className="text-white">{text}</span>
    </li>
  );
};

export default MenuItem;
