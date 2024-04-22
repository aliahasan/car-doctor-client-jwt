import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-bars loading-lg "></span>;
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={`/login`} replace></Navigate>;
};

export default PrivateRoute;
