import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  //if he user is authenticated
  const isAuthenticated = localStorage.getItem("authToken");

  //if not authenticated redirect to login page
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;