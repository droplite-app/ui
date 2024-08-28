import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="focus:outline-none">
        {title}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-blue-50 border border-sky-800 rounded-lg shadow-lg z-20"
          style={{ minWidth: "max-content" }}
        >
          <div className="menu menu-default flex flex-col w-full py-2 bg-white-50 rounded-lg shadow-md border border-sky-700">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
