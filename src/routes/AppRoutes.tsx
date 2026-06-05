import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "@/pages/Login/LoginPage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";

import ProtectedRoute from "./ProtectedRoute";

import DashboardLayout from "@/layouts/DashboardLayout";
import CreateTestPage from "@/pages/CreateTest/CreateTestPage";
import QuestionsPage from "@/pages/Questions/QuestionsPage";
import PreviewPage from "@/pages/Preview/PreviewPage";
import SuccessPage from "@/pages/Success/SuccessPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* Future Routes */}

            <Route path="/create-test" element={<CreateTestPage />} />

            <Route path="/questions" element={<QuestionsPage />} />

            <Route path="/preview" element={<PreviewPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
