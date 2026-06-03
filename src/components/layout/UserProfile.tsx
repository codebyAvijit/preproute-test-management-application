import { useState } from "react";
import { ChevronDown, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "@/store/auth/authSlice";

const UserProfile = () => {
  const [open, setOpen] =
    useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login");
  };

  return (
    <div className="relative">
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          flex
          items-center
          gap-3
          rounded-lg
          px-2
          py-1
          hover:bg-slate-100
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-indigo-100
            font-medium
            text-indigo-600
          "
        >
          A
        </div>

        <div className="hidden text-left sm:block">
          <p className="text-sm font-medium">
            Admin User
          </p>

          <p className="text-xs text-slate-500">
            Administrator
          </p>
        </div>

        <ChevronDown size={16} />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            top-14
            z-50
            w-48
            rounded-lg
            border
            border-slate-200
            bg-white
            py-2
            shadow-lg
          "
        >
          <button
            onClick={handleLogout}
            className="
              flex
              w-full
              items-center
              gap-2
              px-4
              py-2
              text-sm
              text-red-600
              hover:bg-slate-50
            "
          >
            <LogOut size={16} />

            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;