import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);


  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if(user.role!='admin'){
    return <div className="text-center text-red-500 font-bold text-xl">Only admin can make changes.</div>;
  }

  return <Outlet />;
};

export default PrivateRoute;