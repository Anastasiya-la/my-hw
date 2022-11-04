import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css";

const Navbar = () => {
    return (
        <nav className={s.menuList}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={({isActive}) => isActive ? s.active : s.link}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.active : s.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.active : s.link}>Junior+</NavLink>
        </nav>
    )
}

export default Navbar;