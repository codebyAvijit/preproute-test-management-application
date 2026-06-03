import logo from "@/assets/images/logo.svg";

import {
  LayoutDashboard,
  FileText,
  ClipboardList,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({
  open,
  onClose,
}: SidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}

      {open && (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            lg:hidden
          "
        />
      )}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-64
          flex-col
          border-r
          border-slate-200
          bg-white
          transition-transform
          duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >
        <div
          className="
            flex
            h-20
            items-center
            border-b
            border-slate-200
            px-8
          "
        >
          <img
            src={logo}
            alt="Preproute"
            className="h-10 w-auto"
          />
        </div>

        <nav className="flex-1 space-y-2 p-4">
          <SidebarItem
            to="/dashboard"
            label="Dashboard"
            icon={LayoutDashboard}
            onClick={onClose}
          />

          <SidebarItem
            to="/create-test"
            label="Test Creation"
            icon={FileText}
            onClick={onClose}
          />

          <SidebarItem
            to="/questions"
            label="Test Tracking"
            icon={ClipboardList}
            onClick={onClose}
          />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;