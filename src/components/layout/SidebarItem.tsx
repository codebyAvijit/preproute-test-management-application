import { NavLink } from "react-router-dom";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  to: string;
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const SidebarItem = ({
  to,
  label,
  icon: Icon,
  onClick,
}: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        clsx(
          "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all",
          {
            "bg-indigo-50 text-indigo-600":
              isActive,

            "text-slate-600 hover:bg-slate-100":
              !isActive,
          }
        )
      }
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarItem;