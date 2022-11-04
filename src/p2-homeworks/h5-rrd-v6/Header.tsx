import React from 'react'
import s from './Header.module.css'
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

function Header() {


    return (
        <div className={s.header}>
            <div className={s.menu}>
                <Link to={'#'} className={s.menuBtn}></Link>
                <Navbar/>
            </div>

        </div>
    )
}

export default Header
