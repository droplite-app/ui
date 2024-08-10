import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="container">
      <SideBar />
      <main className="content">
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  ); //test
}

export default App;
