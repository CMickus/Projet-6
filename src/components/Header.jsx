import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';
import style from './Header.module.css'
import logo from './images/LOGO.jpg'

export function Header(){
    return (
        <header className={style.headerstyle}>
            <img src={logo} alt="logo de Kasa" className={style.logo}/>
            <div className={style.nav}>
                <NavLink to="/" className={`
                default
                $style.link
                $({isActive, isPending})=>isPending ? "pending" : isActive ? "link" : ""`}>Acceuil</NavLink>
                <NavLink to="/A-propos" className={`
                default
                $style.link
                $({isActive, isPending})=>isPending ? "pending" : isActive ? "active" : ""`}>À propos</NavLink>
            </div>
        </header>
    )
}

export default {Header}