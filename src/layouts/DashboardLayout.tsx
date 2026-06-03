import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        open={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
      />

      <div className="lg:ml-64">
        <Header
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <main
          className="
            p-4
            md:p-6
            xl:p-8
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;