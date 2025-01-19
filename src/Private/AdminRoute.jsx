import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const { isAdmin } = useAdmin();
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
