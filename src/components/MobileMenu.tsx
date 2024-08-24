import React from "react";

interface MobileMenuProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ icon, text, href }) => {
  return (
    <a href={href} className="flex flex-col items-center justify-center w-full text-white no-underline">
      <span className="text-xl">{icon}</span>
      <span className="text-sm">{text}</span>
    </a>
  );
};

export default MobileMenu;
