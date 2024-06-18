// ProtectedRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { authToken } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={authToken ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
