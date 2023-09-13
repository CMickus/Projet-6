import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.scss';
import style from './Header.module.scss'
import logo from './images/LOGO.jpg'


/*Navlink plutot que Link permet un changement du visuel si on est sur la page sur lequel le lien mène ( a travailler)*/
export function Header() {
    return (
        <header className={style.headerstyle}>
            <img src={logo} alt="logo de Kasa" className={style.logo} />
            <div className={style.nav}>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? style.active : style.link}>
                    Acceuil
                </NavLink>
                <NavLink to="/A-propos" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? style.active : style.link}>
                    À propos
                </NavLink>
            </div>
        </header>
    )
}

//export default { Header }