import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
      const googleProvider = new GoogleAuthProvider()
      const SininWithGoogle = ()=>{
            return signInWithRedirect(auth,googleProvider)
      }
  const authInfo = {
            SininWithGoogle
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
