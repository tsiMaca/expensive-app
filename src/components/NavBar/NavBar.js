import React from 'react';
import { NavLink } from './NavBar.styles';

const NavBar = () => {
    return (
        <div>
            <NavLink to="/dashboard"> Dashboard </NavLink>
            <NavLink to="/create" > Create Expense </NavLink>
        </div>
    );
};
export default NavBar;