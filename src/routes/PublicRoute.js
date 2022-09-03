import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/authSelectors';

export default function PublicRoute({ children }) {
  const accountToken = useSelector(getToken);
  return !accountToken ? children : <Navigate to="/contacts"></Navigate>;
}
