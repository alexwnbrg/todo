import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";

const PrivateRoutes = () => {
  const { isLoggedIn } = useContext(UserContext);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
