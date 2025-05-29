import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth} from '../Firebase/Firebase.config'


const AuthProvider = ({children}) => {
    
    const provider = new GoogleAuthProvider();
    
    const [user , setUser] = useState(null);

    // handle register
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    } 

    // handle sign in
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    // handling authentication with Google
    const handleGoogleAuth = () => {
        return signInWithPopup(auth,provider);
    }

    // handle logOut
    const handleLogOut = () => {
        return signOut(auth);
    }


    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        signInUser,
        user,
        handleGoogleAuth,
        handleLogOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;