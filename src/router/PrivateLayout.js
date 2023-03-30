import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function PrivateLayout() {
     <Navigate replace to={"/"} />;
    
     return (
     <><Header /><Outlet /></>
     ) 
}

export default PrivateLayout;