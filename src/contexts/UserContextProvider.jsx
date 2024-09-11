import React, { createContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

// user related functions
const signInUserWithGoogle = async () => {
  try {
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });

    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
  }
};

const signUserOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};

const getUserID = () => {
  if (auth.currentUser) {
    return auth.currentUser.uid;
  } else {
    return;
  }
};

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Listener to keep track of user or no user
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);

        navigate("/");
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ isLoggedIn, signInUserWithGoogle, signUserOut, getUserID }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
