import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const SininWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  });
  const signOutUser = () => {
    return signOut(auth);
  };
  const emailSignUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const updateUser = (updateDoc) => {
    return updateProfile(auth.currentUser, updateDoc);
  };
  const emailLogin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const authInfo = {
    SininWithGoogle,
    user,
    setUser,
    signOutUser,
    loading,
    setLoading,
    emailSignUp,
    updateUser,
    emailLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
