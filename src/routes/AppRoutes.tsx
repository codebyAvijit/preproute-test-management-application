import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "@/pages/Login/LoginPage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";

import ProtectedRoute from "./ProtectedRoute";

import DashboardLayout from "@/layouts/DashboardLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          element={<ProtectedRoute />}
        >
          <Route
            element={<DashboardLayout />}
          >
            <Route
              path="/dashboard"
              element={
                <DashboardPage />
              }
            />

            {/* Future Routes */}

            <Route
              path="/create-test"
              element={
                <div>
                  Create Test
                </div>
              }
            />

            <Route
              path="/questions"
              element={
                <div>
                  Questions
                </div>
              }
            />

            <Route
              path="/preview"
              element={
                <div>Preview</div>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;