
import { Navigate } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
      const {user,loading} = useAuth()

      if(loading){
            return <h1>loading</h1>
      }

      if(user){
            return children
      }
      else{
            return <Navigate to="/login"/>
      }
};

PrivateRoute.propTypes ={
      children: PropTypes.node.isRequired
}

export default PrivateRoute;