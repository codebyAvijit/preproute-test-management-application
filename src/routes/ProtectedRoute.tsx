import { Navigate, Outlet } from "react-router-dom";
import { STORAGE_KEYS } from "@/utils/constants";

const ProtectedRoute = () => {
 const token =
  localStorage.getItem(
    STORAGE_KEYS.TOKEN
  );

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;