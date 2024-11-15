import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privetrout = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation()
  console.log(location);

  if (loading) {
    return () => {
      <div>
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>;
    };
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/home/login"}></Navigate>;
};

export default Privetrout;
