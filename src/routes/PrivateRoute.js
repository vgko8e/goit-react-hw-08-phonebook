import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export default function PrivateRoute({ children }) {
  const accountToken = useSelector(getIsLoggedIn);
  return accountToken ? children : <Navigate to="/login"></Navigate>;
}
