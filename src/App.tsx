import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import RightSidebar from "./components/Right-Sidebar/RightSidebar";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <Router>
      <Routes>
        {/* Independent Routes */}
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount/>}/>

        {/* Main page layout*/}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen bg-[#EFF6FF]">
              <SideBar />
              <main className="flex-1 p-4 bg-blue-50">
                <Header />
                <h1 className="text-2xl font-bold">Main Content</h1>
                <p className="mt-4">This is the main content area.</p>
              </main>
              <RightSidebar />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
