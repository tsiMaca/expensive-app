import React from 'react';
import {useSelector} from 'react-redux';
import { Route, Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function PrivateLayout() {
    const {isAuntenticaded} = useSelector((state)=> state.auth) 

    if (!!isAuntenticaded) return <Navigate replace to={"/"} />;
    
     return (
     <><Header /><Outlet /></>
     ) 
}

export default PrivateLayout;