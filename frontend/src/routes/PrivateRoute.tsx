import React from "react";
import { Route, Navigate } from "react-router";

export interface PrivateRouteType {
    path: string;
    element: React.ReactElement;
}

const PrivateRoute = ({ path, element }: PrivateRouteType) => {
    return (
        localStorage.getItem('token') ? (
            <Route path={path} element={element} />
        ) : (
            <Navigate state={{ from: path }} replace to="/" />
        )

    );
};

export default PrivateRoute;