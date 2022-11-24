import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();
    //create user
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //singin user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email,password);
    };
    //login with google
    const loginWithGoogle = ()=> {
        return signInWithPopup(auth, provider);
    }
    //observer
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
        });
        return ()=> unsubscribe();
    },[]);
    //logout
    const logout = ()=> {
        return signOut(auth);
    }
    //update profile 
    const updateUserProfile = (name, image)=> {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        });
    }
    const authInfo = {
      user,
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