import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {


    const authInfo = {
        email: "Nusrat"
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