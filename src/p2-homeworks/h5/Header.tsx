import React from 'react'
import { NavLink } from 'react-router-dom';
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    return (
        <div>

            <nav className={s.header}>
                <div><NavLink to={"/"} ></NavLink></div>
                <div><NavLink to={PATH.PRE_JUNIOR} className={s.link}>Pre-junior</NavLink></div>
                <div><NavLink to={PATH.JUNIOR} className={s.link}>Junior</NavLink></div>
                <div><NavLink to={PATH.JUNIOR_PLUS} className={s.link}>JuniorPlus</NavLink></div>
                <div className={s.block}></div>
            </nav>

        </div>
    )
}

export default Header
