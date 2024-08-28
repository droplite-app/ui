import React, { useState, useEffect, useRef } from "react";
import Avatar from "../Left-Sidebar/Avatar";
import SearchIcon from "../../assets/Icons/SearchIcon";

interface HeaderControlsProps {
  size?: "small" | "medium" | "large";
}

const HeaderControls: React.FC<HeaderControlsProps> = ({ size = "small" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center space-x-4">
      {/* Search Input */}
      <div className="relative">
        {/**used relativ in parent */}
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-[250px] h-[40px] rounded-full border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon></SearchIcon>
        </div>
      </div>

      {/* Avatar with Dropdown Menu */}
      <div className="relative">
        <button onClick={toggleMenu} className="focus:outline-none">
          <Avatar size={size} />
        </button>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 w-48 bg-blue-50 border border-sky-800 rounded-lg shadow-lg z-20"
            style={{ minWidth: "max-content" }}
          >
            <div className="menu menu-default flex flex-col w-full py-2 bg-white-50 rounded-lg shadow-md border border-sky-700">
              <div className="menu-item hover:bg-blue-100">
                <a
                  className="menu-link block px-4 py-2 text-sky-900 hover:text-sky-800"
                  href="#"
                >
                  <span className="menu-title">Menu link 1</span>
                </a>
              </div>
              <div className="menu-item hover:bg-blue-100">
                <a
                  className="menu-link block px-4 py-2 text-sky-900 hover:text-sky-800"
                  href="#"
                >
                  <span className="menu-title">Menu link 2</span>
                </a>
              </div>
              <div className="menu-item hover:bg-blue-100">
                <a
                  className="menu-link block px-4 py-2 text-sky-900 hover:text-sky-800"
                  href="#"
                >
                  <span className="menu-title">Menu link 3</span>
                </a>
              </div>
              <div className="menu-item hover:bg-blue-100">
                <a
                  className="menu-link block px-4 py-2 text-sky-900 hover:text-sky-800"
                  href="#"
                >
                  <span className="menu-title">Menu link 4</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderControls;
