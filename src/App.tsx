import './App.css';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className="container">
      <SideBar />
      <main className="content">
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}

export default App;
