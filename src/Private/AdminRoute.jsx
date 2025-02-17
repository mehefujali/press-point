import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import PropTypes from "prop-types";
import Loader from "../components/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { isAdmin,isAdminLoading } = useAdmin();
  if(isAdminLoading){
      return <Loader/>
  }
  if (isAdmin) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminRoute;
