import React from "react";
import SearchInput from "../Inputs/SearchInput";
import Avatar from "../Panels/Avatar";
import Dropdown from "../Buttons/DropdownButton";
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");

    navigate("/login");
  };

  return (
    <div
      className={`w-full flex justify-between items-center lg:pt-8 pr-1 h-[60px] bg-transparent relative z-10 ${className}`}
    >
      <div></div>

      <div className="ml-auto pr-2 flex items-center space-x-4">
        <SearchInput />

        <Dropdown title={<Avatar size="small" />}>
          <DropdownMenu>Menu link 1</DropdownMenu>
          <DropdownMenu>Menu link 2</DropdownMenu>
          <DropdownMenu>Menu link 3</DropdownMenu>
          <DropdownMenu onClick={handleLogout}>Logout</DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
