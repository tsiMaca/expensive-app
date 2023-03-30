import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PublicLayout() {
      <Navigate replace to={"/dashboard"} />;
    
     return (
    <Outlet />
     ) 
}

export default PublicLayout;