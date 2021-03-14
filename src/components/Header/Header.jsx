import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <NavLink to='/profile'><h1 className={s.logo}>Groupchat</h1></NavLink>
        </div>
    )
}

export default Header
