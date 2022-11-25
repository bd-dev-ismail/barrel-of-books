import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    //create user
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //singin user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    };
    //login with google
    const loginWithGoogle = ()=> {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    //observer
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe();
    },[]);
    //logout
    const logout = ()=> {
        setLoading(true);
        return signOut(auth);
    }
    //update profile 
    const updateUserProfile = (name, image)=> {
        setLoading(true);
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        });
    }
    const authInfo = {
      user,
      loading,
      registerUser,
      loginUser,
      updateUserProfile,
      loginWithGoogle,
      logout,
    };
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;