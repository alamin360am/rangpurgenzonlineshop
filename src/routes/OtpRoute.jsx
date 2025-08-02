import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import FullPageLoader from "../pages/FullPageLoader";

const OtpRoute = ({ children }) => {
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) return <FullPageLoader />;

  return user.verified ? <Navigate to="/" replace /> : children;
};

export default OtpRoute;