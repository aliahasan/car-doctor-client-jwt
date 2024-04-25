import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

    const userEmail = currentUser?.email || user?.email;
    const loggedUser = { email: userEmail };

      setLoading(false);
      setUser(currentUser);

      // if user exist then issue a token
      if (currentUser) {
        axios.post('http://localhost:5000/jwt',loggedUser , {withCredentials:true})
        .then((res) => console.log('token response ' , res.data));
      }

      else{
        axios.post('http://localhost:5000/jwt' , loggedUser, {withCredentials:true})
        .then(res=>console.log(res.data));
      }

    });
    return () => {
      return unSubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
