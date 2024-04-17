import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);


  if (loading) {
    return <div className="text-center">
        <span className="loading loading-bars loading-lg "></span>;
    </div>
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to={`/login`} replace></Navigate>;
};

export default PrivateRoute;
