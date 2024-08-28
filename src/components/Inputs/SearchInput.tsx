import React from "react";
import SearchIcon from "../../assets/Icons/SearchIcon";

const SearchInput: React.FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 w-[250px] h-[40px] rounded-full border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
