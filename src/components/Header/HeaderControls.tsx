import React, { useState, useEffect, useRef } from "react";
import Avatar from "../Left-Sidebar/Avatar";

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
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8667 24.5L15.5167 17.15C14.9333 17.6167 14.2625 17.9861 13.5042 18.2583C12.7458 18.5306 11.9389 18.6667 11.0833 18.6667C8.96389 18.6667 7.17033 17.9324 5.70267 16.464C4.235 14.9956 3.50078 13.202 3.5 11.0833C3.49922 8.96467 4.23344 7.17111 5.70267 5.70267C7.17189 4.23422 8.96544 3.5 11.0833 3.5C13.2012 3.5 14.9952 4.23422 16.4652 5.70267C17.9352 7.17111 18.669 8.96467 18.6667 11.0833C18.6667 11.9389 18.5306 12.7458 18.2583 13.5042C17.9861 14.2625 17.6167 14.9333 17.15 15.5167L24.5 22.8667L22.8667 24.5ZM11.0833 16.3333C12.5417 16.3333 13.7814 15.8231 14.8027 14.8027C15.8239 13.7822 16.3341 12.5424 16.3333 11.0833C16.3326 9.62422 15.8223 8.38483 14.8027 7.36517C13.783 6.3455 12.5432 5.83489 11.0833 5.83333C9.62344 5.83178 8.38406 6.34239 7.36517 7.36517C6.34628 8.38794 5.83567 9.62733 5.83333 11.0833C5.831 12.5393 6.34161 13.7791 7.36517 14.8027C8.38872 15.8262 9.62811 16.3364 11.0833 16.3333Z"
              fill="#94A3B8"
            />
          </svg>
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
