import SideBar from "../components/SideBar";
import RightSidebar from "../components/Right-Sidebar/RightSidebar";
import Header from "../components/Header/Header";
import fileData from "../assets/File/data.json";
import FileList from "../components/File/FileList";

const Main: React.FC = () => {
  const handleItemClick = (item: { id: number; type: string }) => {
    console.log('Clicked item:', item);
    
  };
  return (
    <div className="flex min-h-screen bg-[#EFF6FF]">
      <SideBar />
      <main className="flex-1 p-4 bg-blue-50">
        <Header />
        <h1 className="text-2xl font-bold">Main Content</h1>
        <FileList items={fileData} onItemClick={handleItemClick} />
      </main>
      <RightSidebar />
    </div>
  );
};

export default Main;
