import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex min-h-screen bg-[#EFF6FF]">
      <SideBar />
      <main className="flex-1 p-4 bg-white">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4">This is the main content area.</p>
      </main>
    </div>
  );
}

export default App;
