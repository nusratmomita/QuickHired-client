import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from '../Firebase/Firebase.config'

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    // handle register
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    } 

    // handle sign in
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth , email , password)
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