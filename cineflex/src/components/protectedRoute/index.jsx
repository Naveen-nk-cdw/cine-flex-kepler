import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CONSTANTS } from '../../constants/constants';
import { AppContext } from '../../App';

const ProtecedRoute = () => {
    const { currentUserDetails } = useContext(AppContext);
    //checks the user login and redirects
    if (!currentUserDetails.isLoggedIn) {
        return <Navigate to={CONSTANTS.HEADER.LOGIN_ROUTE} />;
    }
    return <Outlet />;
};

export default ProtecedRoute;
