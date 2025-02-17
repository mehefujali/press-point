
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';
import PropTypes from 'prop-types';
import Loader from '../components/Loader/Loader';

const PrivateRoute = ({children}) => {
      const {user,loading} = useAuth()
      const {pathname} = useLocation()

      if(loading){
            return <Loader/>
      }

      if(user){
            return children
      }
      else{
            return <Navigate state={pathname} to="/login"/>
      }
};

PrivateRoute.propTypes ={
      children: PropTypes.node.isRequired
}

export default PrivateRoute;