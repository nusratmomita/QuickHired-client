import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    //console.log(location);

    const {user , loading} = useContext(AuthContext);

    if(loading){
        return <span>User is loading</span>
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" ></Navigate>;
};

export default PrivateRoute;