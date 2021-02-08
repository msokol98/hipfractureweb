import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLoggedIn from 'utils/isLoggedIn';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    return(
        <Route {...rest} render={
            props => {
                return isLoggedIn() ? <Component {...rest} {...props} /> : <Redirect to="/login" />
            }
        } />
    )
}


export default ProtectedRoute;