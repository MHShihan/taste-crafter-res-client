import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animation/loadingAnimation.json";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Lottie animationData={loadingAnimation}></Lottie>;
  }

  if (loading === undefined) {
    return <Lottie animationData={loadingAnimation}></Lottie>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
