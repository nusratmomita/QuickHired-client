import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthContext';

const CustomHook = () => {
    const authInfo = useContext(AuthContext);

    return authInfo
};

export default CustomHook;