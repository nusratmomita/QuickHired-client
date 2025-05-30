import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    // console.log(location);

    const {user} = useContext(AuthContext);

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" ></Navigate>;
};

export default PrivateRoute;