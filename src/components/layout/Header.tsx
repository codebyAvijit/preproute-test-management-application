import { useState } from "react";
import { Bell, Menu } from "lucide-react";

import UserProfile from "./UserProfile";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const handleOnBellClick = () => {
    setShowNotifications((prev) => !prev);
  };

  return (
    <header
      className="
        flex
        h-20
        items-center
        border-b
        border-slate-200
        bg-white
        px-6
      "
    >
      {/* Mobile Menu */}

      <button
        onClick={onMenuClick}
        className="
          mr-auto
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          border
          border-slate-200
          lg:hidden
        "
      >
        <Menu size={18} />
      </button>
      <div className="ml-auto flex items-center gap-6">
        <div className="relative">
          <button
            onClick={handleOnBellClick}
            className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-slate-200
      transition-colors
      hover:bg-slate-50
    "
          >
            <Bell size={18} />
          </button>

          {showNotifications && (
            <div
              className="
        absolute
        right-0
        top-12
        z-50
        w-64
        rounded-lg
        border
        border-slate-200
        bg-white
        p-4
        shadow-lg
      "
            >
              <p className="text-sm text-slate-500">
                No notifications available.
              </p>
            </div>
          )}
        </div>
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
