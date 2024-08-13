import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        {/* Independent Routes */}
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />

        {/* Main page layout */}
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
