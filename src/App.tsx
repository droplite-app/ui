import "./App.css";
import SideBar from "./components/SideBar";
import RightSidebar from "./components/Right-Sidebar/RightSidebar";

function App() {
  return (
    <div className="flex min-h-screen bg-[#EFF6FF]">
      <SideBar />
      <main className="flex-1 p-4 bg-blue-50">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4">This is the main content area.</p>
      </main>
      <RightSidebar />
    </div>
  );
}

export default App;
