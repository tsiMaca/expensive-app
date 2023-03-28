import React from 'react';
import {useSelector} from 'react-redux';
import { Route, Navigate, Outlet } from 'react-router-dom';

function PublicLayout() {
    const {isAuntenticaded} = useSelector((state)=> state.auth) 

    if (isAuntenticaded) return <Navigate replace to={"/dashboard"} />;
    
     return (
    <Outlet />
     ) 
}

export default PublicLayout;