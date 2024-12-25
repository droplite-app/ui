import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Main from "./pages/Main";
import React, { ReactNode } from "react";
import NotFound from "./pages/Error";

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("userToken");
};

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Independent Routes */}
        <Route
          path="/login"
          element={isAuthenticated() ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*">
          <NotFound />
        </Route>

        {/* Main page layout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
