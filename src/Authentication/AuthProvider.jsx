import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //console.log(loading)

  // handle register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // handle sign in
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // handling authentication with Google
  const handleGoogleAuth = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // handle logOut
  const handleLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      //console.log(loading)

      // generating JWT token
      if (currentUser?.email) {
        const userData = { email: currentUser?.email };
        // console.log(userData);
        axios.post("http://localhost:8000/jwt", userData).then((res) => {
          // console.log(res.data);
          console.log("Token after JWT", res.data);
          const token = res.data.token;
          // console.log(token);
          localStorage.setItem("token", token);
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    user,
    handleGoogleAuth,
    loading,
    setLoading,
    handleLogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
