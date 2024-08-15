import SideBar from "../components/SideBar";
import RightSidebar from "../components/Right-Sidebar/RightSidebar";
import Header from "../components/Header/Header";
import fileData from "../assets/File/data.json";
import FileList from "../components/File/FileList";
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
      <SideBar />

      <main className="flex-1 p-4 bg-blue-50 overflow-auto mr-[400px]">
        {/* Başlık */}
        <h1 className="text-xl font-semibold text-gray-700 mt-4 mb-16">{title}</h1>
        
        {/* Dosya listesi */}
        <FileList items={fileData} onItemClick={handleItemClick} />
      </main>

      {/* Header'ı RightSidebar'ın hemen üstüne yerleştiriyoruz */}
      <div className="fixed right-0 top-0 w-[400px]">
        <Header />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Main;
