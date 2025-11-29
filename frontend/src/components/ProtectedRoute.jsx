import { Navigate } from "react-router-dom";
import { useStore } from "../store";

const ProtectedRoute = ({ children, role }) => {
  const user = useStore((state) => state.user);

  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
