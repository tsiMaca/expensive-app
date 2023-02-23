import React from 'react';
import { NavLink } from './NavBar.styles';
import AppRouter from '../../router/AppRouter';


const NavBar = () => {
    return (
        <div>
        
            <NavLink to="/"> Dashboard </NavLink>
            <NavLink to="/create" > Create Expense </NavLink>
            <NavLink to="/edit" > Edit Expense </NavLink>
            <NavLink to="/help" > Help </NavLink>
        </div>
    );
};

export default NavBar;