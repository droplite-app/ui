import SideBar from "../components/Templates/SideBar";
import Header from "../components/Templates/Header";
import fileData from "../assets/File/data.json";
import FileList from "../components/Templates/FileList";
import React, { useState } from "react";

const Main: React.FC = () => {
  const [title, setTitle] = useState("My Personal Space");

  const handleItemClick = (item: {
    id: number;
    type: string;
    name: string;
  }) => {
    setTitle(`My Personal Space > ${item.name}`);
  };

  return (
    <div className="flex min-h-screen bg-[#EFF6FF]">
      {/* Sidebar stays visible on the left */}
      <SideBar />

      {/* Main content area */}
      <main className="flex-1 p-4 bg-white lg:bg-blue-50 overflow-auto lg:mr-[400px] mt-0 lg:mt-0">
        {/* Mobile Header: Only visible on mobile */}
        <Header className="lg:hidden" />

        <div className="lg:hidden flex justify-center items-center">
          <div className="max-w-[300px] w-full flex justify-center"></div>
        </div>

        {/* Title visible only on desktop */}
        <h1 className="hidden lg:block text-xl font-semibold text-gray-700 mt-4 mb-16 pl-4">
          {title}
        </h1>

        <div>
          {/* FileList appears below the RightSidebar on mobile */}
          <FileList items={fileData} onItemClick={handleItemClick} />
        </div>
      </main>

      {/* Right sidebar with header on top for desktop */}
      <div className="hidden lg:block fixed right-0 top-0 w-[400px]">
        <Header />
      </div>
    </div>
  );
};

export default Main;
